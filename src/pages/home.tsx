import Layout from "../layout/layout";
import Cards from "../views/home/cards";
import ActivityBarChart from "../views/home/activityBarChart";
import ExpensePolarArea from "../views/home/expensePolarArea";
import Transfer from "../views/home/transfer";
import BalanceLineChart from "../views/home/balanceLineChart";

const Home = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-[1440px]">
        <Layout>
          <Cards />
          <div className="flex flex-col md:flex-row px-4">
            <div className="w-full md:w-[65%] mr-4 mb-8">
              <ActivityBarChart />
            </div>
            <div className="w-full md:w-[33%] mb-8">
              <ExpensePolarArea />
            </div>
          </div>
          <div className="flex flex-col md:flex-row px-4">
            <div className="w-full md:w-[45%] mr-4 mb-8">
              <Transfer />
            </div>
            <div className="w-full md:w-[52%] mb-8">
              <BalanceLineChart />
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Home;
