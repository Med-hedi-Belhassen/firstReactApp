import React from 'react';
import "./featuredInfo.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export default function FeaturedInfo() {
  return <div className='featured'>
      <div className="featuredItem">
          <span className='featuredTitle'> Revenu</span>
          <div className="featuredMoneyContainer">
              <span className='featuredMoney'>2,415 DT</span>
              <span className='featuredMoneyRate'>-11.4 <ArrowDownwardIcon className='feturedIcon negative'/></span>
          </div>
          <span className="featuredSub">Comapred to Last month</span>
      </div>
      <div className="featuredItem">
          <span className='featuredTitle'> Sales</span>
          <div className="featuredMoneyContainer">
              <span className='featuredMoney'>3,415 DT</span>
              <span className='featuredMoneyRate'>-11.4 <ArrowDownwardIcon className='feturedIcon negative'/></span>
          </div>
          <span className="featuredSub">Comapred to Last month</span>
      </div>
      <div className="featuredItem">
          <span className='featuredTitle'> Costs</span>
          <div className="featuredMoneyContainer">
              <span className='featuredMoney'>4,415 DT</span>
              <span className='featuredMoneyRate'>14.4 <ArrowUpwardIcon className='feturedIcon'/></span>
          </div>
          <span className="featuredSub">Comapred to Last month</span>
      </div>
  </div>;
}
