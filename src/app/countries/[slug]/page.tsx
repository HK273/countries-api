import { getCountry } from "@/lib/data-extraction";
import { SideCard } from "@/components/ui/side-card";
import { CountryProps } from "@/types/country-props";
// export const dynamic = "force-dynamic";

export default async function CountryCard(props: CountryProps) {
  // console.log(props);
  const country = await getCountry(props.params.slug);
  // When there are spaces in names we get something like -> { params: { slug: 'Vatican%20City' }, searchParams: {} }
  return (
    <>
      {country.map((item) => {
        return <SideCard key={item.Name} {...item} />;
      })}
    </>
  );
}
