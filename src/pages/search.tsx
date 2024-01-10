import Layout from "../layout/layout";
import SearchMovie from "../views/search/searchMovie";

const Search = () => {
  return (
    <div className="py-8 bg-background min-h-[100vh] flex justify-center">
      <div className="w-full max-w-[1440px]">
        <Layout>
          <SearchMovie />
        </Layout>
      </div>
    </div>
  );
};

export default Search;
