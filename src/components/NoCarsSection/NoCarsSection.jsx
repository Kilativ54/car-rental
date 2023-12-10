import LinkToCatalog from 'components/LinkToCatalog/LinkToCatalog';
import Section from 'components/Section/Section';

const NoCarsSection = () => {
  return (
    <Section>
      <p>
        "Oops, there's nothing here. Go to the catalog to add cars to your
        favorites.
      </p>
            <LinkToCatalog text="Catalog" />
    </Section>
  );
};

export default NoCarsSection;
