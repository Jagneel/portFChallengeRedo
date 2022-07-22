import React, { useEffect, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';

const Chart = (data) => {

    

    const barChart = (
        <ResponsiveBar
        data={data}
        indexBy="first_brewed"
        keys={['abv']}
        margin={{ top: 50, right: 130, bottom: 100, left: 160 }}
        padding={0.4}
        valueScale={{ type: "linear" }}
        colors="#FFAC1C"
        animate={true}
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        enableLabel={true}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Sum of beers first brewed",
          legendPosition: "middle",
          legendOffset: -40
        }}
        axisBottom={null}
      />
    ) 

    return (
        <div className="table" style={{ height: "800px" }}></div>
    )
}

export default Chart