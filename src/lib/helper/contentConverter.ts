import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

const rootPath = path.join(process.cwd(), "src/content");

// TODO: implement URL-based i18n routing (/es/web, /pt/web) for language support
const getCurrentLang = () => {
  return "es";
};

const resolveFilePath = (filePath: string) => {
  const lang = getCurrentLang();
  const fullPath = path.join(rootPath, filePath);

  if (lang !== "en") {
    const langPath = fullPath.replace(/\.mdx$/, `.${lang}.mdx`);
    if (fs.existsSync(langPath)) {
      return langPath;
    }
  }

  return fullPath;
};

const readFile = (filePath: string) => {
  return fs.readFileSync(filePath, "utf-8");
};

const parseFrontmatter = (frontmatter: any) => {
  const frontmatterString = JSON.stringify(frontmatter);
  return JSON.parse(frontmatterString);
};

export const getMainPage = (filePath: string) => {
  const pageDataPath = resolveFilePath(filePath);

  if (!fs.existsSync(pageDataPath)) {
    notFound();
  }

  const pageData = readFile(pageDataPath);
  const { content, data: frontmatter } = matter(pageData);

  return {
    data: parseFrontmatter(frontmatter),
    content,
  };
};

export const getAllPages = (folder: string) => {
  const lang = getCurrentLang();
  const baseFolderPath = path.join(rootPath, folder);
  const langFolderPath =
    lang !== "en" ? path.join(rootPath, `${folder}-${lang}`) : null;
  const folderPath =
    langFolderPath && fs.existsSync(langFolderPath)
      ? langFolderPath
      : baseFolderPath;

  if (!fs.existsSync(folderPath) || !fs.lstatSync(folderPath).isDirectory()) {
    notFound();
  }

  const filesPath = fs.readdirSync(folderPath);
  const sanitizeFiles = filesPath.filter(
    (file) => file.endsWith(".mdx") && !file.startsWith("_")
  );

  // Prefer lang-specific files, fallback to base files per slug, avoid duplicates
  const fileMap: Record<string, string> = {};
  sanitizeFiles.forEach((file) => {
    const baseSlug = file
      .replace(/\.es\.mdx$/, "")
      .replace(/\.pt\.mdx$/, "")
      .replace(/\.mdx$/, "");

    const isLangFile = file.endsWith(`.${lang}.mdx`);
    const isOtherLang = file.match(/\.(es|pt)\.mdx$/);

    if (lang === "en") {
      if (!isOtherLang) {
        fileMap[baseSlug] = file;
      }
      return;
    }

    // lang is es or pt
    if (isLangFile) {
      fileMap[baseSlug] = file;
      return;
    }

    if (!isOtherLang && !fileMap[baseSlug]) {
      fileMap[baseSlug] = file;
    }
  });

  const candidateFiles = Object.values(fileMap);

  const singlePages = candidateFiles.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const filePath = path.join(folderPath, filename);
    const pageData = readFile(filePath);
    const { content, data: frontmatter } = matter(pageData);
    const url = frontmatter.url ? frontmatter.url.replace("/", "") : slug;

    return {
      data: parseFrontmatter(frontmatter),
      slug: url,
      content,
    };
  });

  const publishedPages = singlePages.filter((page) => !page.data.draft && page);
  // const dateFilter = publishedPages.filter(
  //   (page) => new Date(page.data.date || new Date()) <= new Date()
  // );

  // const filterByDate = dateFilter.sort(
  //   (page, page2) =>
  //     new Date(page2.data.date || new Date()).getTime() -
  //     new Date(page.data.date || new Date()).getTime()
  // );

  // return filterByDate;

  const sortById = publishedPages.sort((a, b) => a.data.id - b.data.id);
  return sortById;
};
