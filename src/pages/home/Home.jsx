import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import "./home.css";
import {userData} from'../../dummyData';
import WidgetLg from '../../components/WidgetLg/WidgetLg';
import WidgetSm from '../../components/WidgetSm/WidgetSm';
export default function Home() {
  return <div className='home'> 
      <FeaturedInfo/>
      <Chart data={userData} title="User Analytics" grid dataK="Active user"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
  </div>;
}
