import "./indexA.css"
const IndexA = () => {
  return (
    <svg viewBox="0 0 5000 5000" className='contIndexA'>
    <defs>
    <filter id="displacementFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.03,0.03"
            numOctaves="5"
            seed="1000"
            result="turbulence"
          />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="250"
            // xChannelSelector="R"
            // yChannelSelector="G"
          />
    </filter>
      <g id="linea1">
        <g className='a1'>
          <polygon className="inA1" points="599.8,2201.3 616.9,2211.2 519.1,2267.3 501.8,2257.4 	"/>
          <polygon className="inA2" points="501.8,2257.4 519.1,2267.3 519.1,2336.6 616.8,2392.9 616.8,2416.3 501.8,2350 	"/>
          <polygon className="inA3" points="616.8,2416.3 714.6,2360.3 714.6,2336.9 616.8,2392.9 	"/>
          <polygon className="inA4" points="616.8,2323.6 714.6,2267.5 714.6,2336.9 616.8,2392.9 	"/>
          <polygon className="inA5" points="617,2211.3 714.6,2267.5 616.8,2323.6 519.1,2267.3 	"/>
          <polygon className="inA6" points="519.1,2267.3 616.8,2323.6 616.8,2392.9 519.1,2336.6 	"/>
        </g>
        <g className='a2'>
          <polygon className="inA1" points="714.7,2267.6 731.8,2277.5 634,2333.6 616.8,2323.6 	"/>
          <polygon className="inA2" points="616.8,2323.6 634,2333.6 634,2402.8 829.4,2515.6 829.4,2538.9 616.8,2416.3 	"/>
          <polygon className="inA3" points="829.4,2538.9 927.2,2483 927.2,2459.6 829.4,2515.6 	"/>
          <polygon className="inA4" points="829.4,2446.3 927.2,2390.2 927.2,2459.6 829.4,2515.6 	"/>
          <polygon className="inA5" points="732,2277.6 927.2,2390.2 829.4,2446.3 634,2333.6 	"/>
          <polygon className="inA6" points="634,2333.6 829.4,2446.3 829.4,2515.6 634,2402.8 	"/>
        </g>
        <g className='a3'>
          <polygon className="inA1" points="927.4,2390.3 944.5,2400.1 846.6,2456.3 829.4,2446.3 	"/>
          <polygon className="inA2" points="829.4,2446.3 846.6,2456.3 846.6,2525.5 1042,2638.2 1042,2661.6 829.4,2538.9 	"/>
          <polygon className="inA3" points="1042,2661.6 1139.8,2605.6 1139.8,2582.3 1042,2638.2 	"/>
          <polygon className="inA4" points="1042,2569 1139.8,2512.8 1139.8,2582.3 1042,2638.2 	"/>
          <polygon className="inA5" points="944.6,2400.2 1139.8,2512.8 1042,2569 846.6,2456.3 	"/>
          <polygon className="inA6" points="846.6,2456.3 1042,2569 1042,2638.2 846.6,2525.5 	"/>
        </g>
        <g className='a4'>
          <polygon className="inA1" points="1140,2512.9 1157.1,2522.8 1059.3,2578.9 1042,2569 	"/>
          <polygon className="inA2" points="1042,2569 1059.3,2578.9 1059.3,2648.2 1254.7,2760.9 1254.7,2784.3 1042,2661.6 	"/>
          <polygon className="inA3" points="1254.7,2784.3 1352.5,2728.3 1352.5,2704.9 1254.7,2760.9 	"/>
          <polygon className="inA4" points="1254.7,2691.6 1352.5,2635.5 1352.5,2704.9 1254.7,2760.9 	"/>
          <polygon className="inA5" points="1157.2,2522.9 1352.5,2635.5 1254.7,2691.6 1059.3,2578.9 	"/>
          <polygon className="inA6" points="1059.3,2578.9 1254.7,2691.6 1254.7,2760.9 1059.3,2648.2 	"/>
        </g>
        <g className='a5'>
          <polygon className="inA1" points="1352.6,2635.6 1369.7,2645.5 1271.9,2701.6 1254.7,2691.6 	"/>
          <polygon className="inA2" points="1254.7,2691.6 1271.9,2701.6 1271.9,2770.8 1467.3,2883.6 1467.3,2906.9 1254.7,2784.3 	"/>
          <polygon className="inA3" points="1467.3,2906.9 1565.1,2851 1565.1,2827.6 1467.3,2883.6 	"/>
          <polygon className="inA4" points="1467.3,2814.3 1565.1,2758.2 1565.1,2827.6 1467.3,2883.6 	"/>
          <polygon className="inA5" points="1369.9,2645.6 1565.1,2758.2 1467.3,2814.3 1271.9,2701.6 	"/>
          <polygon className="inA6" points="1271.9,2701.6 1467.3,2814.3 1467.3,2883.6 1271.9,2770.8 	"/>
        </g>
        <g className='a6'>
          <polygon className="inA1" points="1565.3,2758.3 1582.3,2768.1 1484.5,2824.3 1467.3,2814.3 	"/>
          <polygon className="inA2" points="1467.3,2814.3 1484.5,2824.3 1484.5,2893.5 1679.9,3006.2 1679.9,3029.6 1467.3,2906.9 	"/>
          <polygon className="inA3" points="1679.9,3029.6 1777.7,2973.6 1777.7,2950.3 1679.9,3006.2 	"/>
          <polygon className="inA4" points="1679.9,2937 1777.7,2880.8 1777.7,2950.3 1679.9,3006.2 	"/>
          <polygon className="inA5" points="1582.5,2768.2 1777.7,2880.8 1679.9,2937 1484.5,2824.3 	"/>
          <polygon className="inA6" points="1484.5,2824.3 1679.9,2937 1679.9,3006.2 1484.5,2893.5 	"/>
        </g>
        <g className='a7'>
          <polygon className="inA1" points="1777.9,2880.9 1795,2890.8 1697.2,2946.9 1679.9,2937 	"/>
          <polygon className="inA2" points="1679.9,2937 1697.2,2946.9 1697.2,3016.2 1794.9,3072.5 1794.9,3095.9 1679.9,3029.6 	"/>
          <polygon className="inA3" points="1794.9,3095.9 1892.7,3039.9 1892.7,3016.5 1794.9,3072.5 	"/>
          <polygon className="inA4" points="1794.9,3003.2 1892.7,2947.1 1892.7,3016.5 1794.9,3072.5 	"/>
          <polygon className="inA5" points="1795.1,2890.9 1892.7,2947.1 1794.9,3003.2 1697.2,2946.9 	"/>
          <polygon className="inA6" points="1697.2,2946.9 1794.9,3003.2 1794.9,3072.5 1697.2,3016.2 	"/>
        </g>
        <g className='b1'>
          <polygon className="inA1" points="599.8,2108.6 616.9,2118.5 519.1,2174.6 501.9,2164.7 	"/>
          <polygon className="inA2" points="501.9,2164.7 519.1,2174.6 519.1,2243.9 731.7,2366.6 731.7,2389.9 501.9,2257.3 	"/>
          <polygon className="inA3" points="731.7,2389.9 829.5,2334 829.5,2310.6 731.7,2366.6 	"/>
          <polygon className="inA4" points="731.7,2297.3 829.5,2241.2 829.5,2310.6 731.7,2366.6 	"/>
          <polygon className="inA5" points="617.1,2118.6 829.5,2241.2 731.7,2297.3 519.1,2174.6 	"/>
          <polygon className="inA6" points="519.1,2174.6 731.7,2297.3 731.7,2366.6 519.1,2243.9 	"/>
        </g>
        <g className='b2'>
          <polygon className="inA1" points="829.7,2241.3 846.8,2251.1 749,2307.3 731.7,2297.3 	"/>
          <polygon className="inA2" points="731.7,2297.3 749,2307.3 749,2376.5 944.4,2489.2 944.4,2512.6 731.7,2389.9 	"/>
          <polygon className="inA3" points="944.4,2512.6 1042.2,2456.6 1042.2,2433.3 944.4,2489.2 	"/>
          <polygon className="inA4" points="944.4,2420 1042.2,2363.8 1042.2,2433.3 944.4,2489.2 	"/>
          <polygon className="inA5" points="846.9,2251.2 1042.2,2363.8 944.4,2420 749,2307.3 	"/>
          <polygon className="inA6" points="749,2307.3 944.4,2420 944.4,2489.2 749,2376.5 	"/>
        </g>
        <g className='b3'>
          <polygon className="inA1" points="1042.3,2363.9 1059.4,2373.8 961.6,2429.9 944.4,2420 	"/>
          <polygon className="inA2" points="944.4,2420 961.6,2429.9 961.6,2499.2 1157,2611.9 1157,2635.2 944.4,2512.6 	"/>
          <polygon className="inA3" points="1157,2635.2 1254.8,2579.3 1254.8,2555.9 1157,2611.9 	"/>
          <polygon className="inA4" points="1157,2542.6 1254.8,2486.5 1254.8,2555.9 1157,2611.9 	"/>
          <polygon className="inA5" points="1059.6,2373.9 1254.8,2486.5 1157,2542.6 961.6,2429.9 	"/>
          <polygon className="inA6" points="961.6,2429.9 1157,2542.6 1157,2611.9 961.6,2499.2 	"/>
        </g>
        <g className='b4'>
          <polygon className="inA1" points="1255,2486.6 1272,2496.5 1174.2,2552.6 1157,2542.6 	"/>
          <polygon className="inA2" points="1157,2542.6 1174.2,2552.6 1174.2,2621.8 1369.6,2734.6 1369.6,2757.9 1157,2635.2 	"/>
          <polygon className="inA3" points="1369.6,2757.9 1467.4,2702 1467.4,2678.6 1369.6,2734.6 	"/>
          <polygon className="inA4" points="1369.6,2665.3 1467.4,2609.2 1467.4,2678.6 1369.6,2734.6 	"/>
          <polygon className="inA5" points="1272.2,2496.5 1467.4,2609.2 1369.6,2665.3 1174.2,2552.6 	"/>
          <polygon className="inA6" points="1174.2,2552.6 1369.6,2665.3 1369.6,2734.6 1174.2,2621.8 	"/>
        </g>
        <g className='b5'>
          <polygon className="inA1" points="1467.6,2609.3 1484.7,2619.1 1386.9,2675.3 1369.6,2665.3 	"/>
          <polygon className="inA2" points="1369.6,2665.3 1386.9,2675.3 1386.9,2744.5 1582.2,2857.2 1582.2,2880.6 1369.6,2757.9 	"/>
          <polygon className="inA3" points="1582.2,2880.6 1680.1,2824.6 1680.1,2801.3 1582.2,2857.2 	"/>
          <polygon className="inA4" points="1582.2,2788 1680.1,2731.8 1680.1,2801.3 1582.2,2857.2 	"/>
          <polygon className="inA5" points="1484.8,2619.2 1680.1,2731.8 1582.2,2788 1386.9,2675.3 	"/>
          <polygon className="inA6" points="1386.9,2675.3 1582.2,2788 1582.2,2857.2 1386.9,2744.5 	"/>
        </g>
        <g className='b6'>
          <polygon className="inA1" points="1680.2,2731.9 1697.3,2741.8 1599.5,2797.9 1582.2,2788 	"/>
          <polygon className="inA2" points="1582.2,2788 1599.5,2797.9 1599.5,2867.2 1794.9,2979.9 1794.9,3003.2 1582.2,2880.6 	"/>
          <polygon className="inA3" points="1794.9,3003.2 1892.7,2947.3 1892.7,2923.9 1794.9,2979.9 	"/>
          <polygon className="inA4" points="1794.9,2910.6 1892.7,2854.5 1892.7,2923.9 1794.9,2979.9 	"/>
          <polygon className="inA5" points="1697.5,2741.9 1892.7,2854.5 1794.9,2910.6 1599.5,2797.9 	"/>
          <polygon className="inA6" points="1599.5,2797.9 1794.9,2910.6 1794.9,2979.9 1599.5,2867.2 	"/>
        </g>
      </g>
    </defs>
      <path className="fnd" d="M392.8,0h4214.5c216,0,392.8,176.7,392.8,392.8v4214.5c0,216-176.7,392.8-392.8,392.8H392.8 C176.7,5000,0,4823.3,0,4607.2V392.8C0,176.7,176.7,0,392.8,0"/>
      <g id='muralla1'>
        <use className='ini' href="#linea1" y="0"/>
        <use href="#linea1" y="-185.5"/>
        <use href="#linea1" y="-371.0"/>
        <use href="#linea1" y="-556.5"/>
        <use href="#linea1" y="-742.0"/>
        <use href="#linea1" y="-927.5"/>
        <use href="#linea1" y="-1113.0"/>
        <use href="#linea1" y="-1298.5"/>
        <use href="#linea1" y="-1484.0"/>
      </g>
      {/* <use className='muralla2' href="#muralla1" /> */}

      <text className='text1'>Construir</text>
      <text className='text2'>Revocar</text>

      <path className="revoque" d="M3345.8,973.2c0.5-70.7-43.2-154.3-97.5-186.6l-98.3-58.5c-21.6-12.9-39.5-0.3-39.7,27.8l-2.6,412.2 l-7.2,1129.6c0.2-27.5-7.1,42.3,35.3,67.5c407.7,242.4,815.4,484.9,1223.1,727.3c21.6,12.9,39.5,0.3,39.7-27.8l0.8-128.1 c0.5-70.7-43.2-154.3-97.5-186.6c-195.7-116.4-576.2-262-573.6-669.5c0.6-99.3-60.7-216.7-137-262 C3292.8,1641.3,3344.2,1225.2,3345.8,973.2"/>
      
    </svg>
  )
}

export default IndexA