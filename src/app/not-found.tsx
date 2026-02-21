import errorData from "@/config/errorData.json";
import ErrorPage from "@/components/error/ErrorPage ";
import BrandingHeader from "@/components/headers/BrandingHeader";
import SeoData from "@/components/tools/SeoData";

export default function NotFound() {
  return (
    <main>
      <SeoData
        meta_title={"Página no encontrada — Sonrisa Argentina"}
        description={"La página que buscás no existe o fue movida."}
        noindex={true}
      />
      <BrandingHeader />
      <ErrorPage data={errorData.data} />
    </main>
  );
}
