import React from 'react'
import { useEffect } from "react";
import './jailLocator.css'
import rightExtend from '../Photos/rightExtend.png'
import equalStar from '../Photos/equalStar.png'
import logos from '../Photos/logos.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function JailLocator() {
    useEffect(() => {
        AOS.init();
    }, [])
    AOS.init({
        duration: 400,
        once: false,
    })

    return (
        <div>

            <div id='courtLocatorImgDiv'>
                <div id='courtHeadingDiv'>
                    <img style={{marginLeft:"20%"}} src={rightExtend} alt='' id='rightExtendImg' data-aos="fade-left" data-aos-duration="1000"></img>
                    <h1 id='courtHeading' data-aos="fade-right" data-aos-duration="900" >Jail Locator</h1>
                </div>
            </div>

            <div id='southernCalforniaMainHeading' data-aos="zoom-in-up" data-aos-duration="1000">SOUTHERN CALIFORNIA COURT HOUSE LOCATIONS</div>


            <h2 className='blueBoxSideHeadings reAdjust' id='marginAdjustment' data-aos="fade-left">Los Angeles County Jail Locations</h2>

            <div className='blueBoxesDiv'>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>77th Street Regional Jail</h3>
                    <p className='boxAddress'>7600 S. Broadway,Los Angeles, CA – 90003</p>
                    <p className='boxPhone'>213 473-4851</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Alhambra Jail</h3>
                    <p className='boxAddress'>211 S 1st St,Alhambra, CA – 91801</p>
                    <p className='boxPhone'>626 570-5145</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Arcadia Jail</h3>
                    <p className='boxAddress'>250 W. Huntington Dr,Arcadia, CA – 91066</p>
                    <p className='boxPhone'>626 574-5150</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Azusa Jail</h3>
                    <p className='boxAddress'>725 N. Alameda Ave.Azusa, CA – 91702</p>
                    <p className='boxPhone'>626 812-3277</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Baldwin Park Jail</h3>
                    <p className='boxAddress'>14403 E. Pacific Ave.Baldwin Park , CA – 91706</p>
                    <p className='boxPhone'>626 960-1955</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Beverly Hills Jail</h3>
                    <p className='boxAddress'>464 N. Rexford Dr.Beverly Hills , CA – 90210</p>
                    <p className='boxPhone'>310 550-4951</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Burbank Jail</h3>
                    <p className='boxAddress'>200 N. Third St.Burbank, CA – 91502</p>
                    <p className='boxPhone'>818 238-3010</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Carson Jail</h3>
                    <p className='boxAddress'>21356 S. Avalon Blvd.Carson , CA – 90745</p>
                    <p className='boxPhone'>310 830-1123</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Century Regional Detention Facility</h3>
                    <p className='boxAddress'>11705 Alameda St.Lynwood, CA – 90262</p>
                    <p className='boxPhone'>213 473-6080</p>
                </div>

                {/* /////// */}


                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>City of Industry Jail</h3>
                    <p className='boxAddress'>150 N. Hudson Ave.City of Industry, CA – 91744</p>
                    <p className='boxPhone'>626 330-3322</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Claremont Jail</h3>
                    <p className='boxAddress'>570 W. Bonita Ave.Claremont , CA – 91711</p>
                    <p className='boxPhone'>909 399-5411</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Covina Jail</h3>
                    <p className='boxAddress'>444 N. Citrus Ave.Covina, CA – 91723</p>
                    <p className='boxPhone'>626 858-4413</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Crescenta Valley Jail</h3>
                    <p className='boxAddress'>4554 N. Briggs Ave.La Crescenta , CA – 91214</p>
                    <p className='boxPhone'>818 248-3464</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Culver City Jail</h3>
                    <p className='boxAddress'>4040 Duquesne Ave.Culver City , CA – 90232</p>
                    <p className='boxPhone'>310 837-1221</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Devonshire Area Jail</h3>
                    <p className='boxAddress'>10250 Etiwanda Ave.Northridge , CA – 91325</p>
                    <p className='boxPhone'>818 756-8266</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Downey Jail</h3>
                    <p className='boxAddress'>10911 Brookshire Ave.Downey , CA – 90241</p>
                    <p className='boxPhone'>562 861-0771</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>East L.A. Jail</h3>
                    <p className='boxAddress'>5019 E. Third St.East Los Angeles , CA – 90022</p>
                    <p className='boxPhone'>323 264-4151</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>El Monte Jail</h3>
                    <p className='boxAddress'>11333 Valley Blvd.El Monte , CA – 91731</p>
                    <p className='boxPhone'>626 580-2110</p>
                </div>



                {/* /////// */}


                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Foothill Area Jail</h3>
                    <p className='boxAddress'>12760 Osborne St.Pacoima, CA – 91331</p>
                    <p className='boxPhone'>818 756-8865</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Gardena Jail</h3>
                    <p className='boxAddress'>1712 W. 162nd St.Gardena, CA – 90247-3732</p>
                    <p className='boxPhone'>310 217-9632</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Glass House</h3>
                    <p className='boxAddress'>150 N. Los Angeles St.Los Angeles, CA – 90012</p>
                    <p className='boxPhone'>213 485-2555</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Glendale Jail</h3>
                    <p className='boxAddress'>140 N. Isabel St.Glendale , CA – 91206-4313</p>
                    <p className='boxPhone'>818 548-3124</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Glendora Jail</h3>
                    <p className='boxAddress'>150 S. Glendora Ave.Glendora, CA – 91741</p>
                    <p className='boxPhone'>626 914-8250</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Harbor Area Jail</h3>
                    <p className='boxAddress'>2175 John S. Gibson Blvd.San Pedro, CA – 90731</p>
                    <p className='boxPhone'>310 548-7617</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Hawthorne Jail</h3>
                    <p className='boxAddress'>4440 W. 126th St.Hawthorne, CA – 90250</p>
                    <p className='boxPhone'>310 970-7258</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Hermosa Beach Jail</h3>
                    <p className='boxAddress'>540 Pier Ave.Hermosa Beach , CA – 90254</p>
                    <p className='boxPhone'>310 318-0360</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Hollywood Area Jail</h3>
                    <p className='boxAddress'>1358 N. Wilcox Ave.Los Angeles , CA – 90028</p>
                    <p className='boxPhone'>213 485-5125</p>
                </div>



                {/* /////// */}


                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Huntington Park Jail</h3>
                    <p className='boxAddress'>6542 Miles Ave.Huntington Park, CA – 90255</p>
                    <p className='boxPhone'>323 826-6622</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Inglewood Jail</h3>
                    <p className='boxAddress'>1 Manchester Blvd.Inglewood, CA – 90301</p>
                    <p className='boxPhone'>310 412-5325</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Inmate Reception Center</h3>
                    <p className='boxAddress'>(Twin Tower) 450 Bauchet St.Los Angeles , CA – 90012</p>
                    <p className='boxPhone'>213 473-6080</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>L.A. County Jail</h3>
                    <p className='boxAddress'>450 Bauchet St.Los Angeles, CA – 90012</p>
                    <p className='boxPhone'>213 473-6080</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>La Verne Jail</h3>
                    <p className='boxAddress'>2061 Third St.La Verne , CA – 91750</p>
                    <p className='boxPhone'>909 596-1913</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Lakewood Jail</h3>
                    <p className='boxAddress'>5130 N. Clark Ave.Lakewood , CA – 90712</p>
                    <p className='boxPhone'>562 866-9061</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Lancaster Jail</h3>
                    <p className='boxAddress'>501 W. Lancaster Blvd.Lancaster , CA – 93534</p>
                    <p className='boxPhone'>661 948-8466</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Lennox Jail</h3>
                    <p className='boxAddress'>4331 Lennox Blvd.Lennox, CA – 90304</p>
                    <p className='boxPhone'>310 671-7531</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Lomita Jail</h3>
                    <p className='boxAddress'>26123 Narbonne Ave.Lomita, CA – 90717</p>
                    <p className='boxPhone'>310 539-1661</p>
                </div>



                {/* /////// */}


                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Long Beach Jail</h3>
                    <p className='boxAddress'>100 Long Beach Blvd.Long Beach , CA – 90802</p>
                    <p className='boxPhone'>562 570-7260</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Malibu / Lost Hills Jail</h3>
                    <p className='boxAddress'>27050 Agoura Road Agoura, CA – 91301</p>
                    <p className='boxPhone'>818 878-1808</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Manhattan Beach Jail</h3>
                    <p className='boxAddress'>420 15th Street,Manhattan Beach, CA – 90266</p>
                    <p className='boxPhone'>310 802-5189</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Marina Del Rey Jail</h3>
                    <p className='boxAddress'>13851 Fiji Way,Marina Del Rey , CA – 90292</p>
                    <p className='boxPhone'>310 823-7762</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Maywood Jail</h3>
                    <p className='boxAddress'>4317 Slausen Ave.Maywood, CA – 90270</p>
                    <p className='boxPhone'>323 562-5008</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Men’s Central Jail</h3>
                    <p className='boxAddress'>441 Bauchet St.Los Angeles , CA – 90012</p>
                    <p className='boxPhone'>213 473-6080</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Metropolitan Jail Section</h3>
                    <p className='boxAddress'>150 N. Los Angeles St.Los Angeles, CA – 90012</p>
                    <p className='boxPhone'>213 485-2555</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Monrovia Jail</h3>
                    <p className='boxAddress'>140 E. Lime Ave.Monrovia, CA – 91016</p>
                    <p className='boxPhone'>626 256-8000</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Montebello Jail</h3>
                    <p className='boxAddress'>1600 W. Beverly Blvd.Montebello, CA – 90640-3932</p>
                    <p className='boxPhone'>323 887-1313</p>
                </div>


                {/* /////// */}


                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Monterey Park Jail</h3>
                    <p className='boxAddress'>320 W. Newmark Ave.Monterey Park, CA – 91754-2818</p>
                    <p className='boxPhone'>626 307-1245</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>North County Correctional Facility</h3>
                    <p className='boxAddress'>29340 The Old Road Saugus, CA – 91350</p>
                    <p className='boxPhone'>213 473-6080</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Norwalk Jail</h3>
                    <p className='boxAddress'>12335 Civic Center Drive Norwalk , CA – 90650</p>
                    <p className='boxPhone'>562 863-8711</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Pacific Area Jail</h3>
                    <p className='boxAddress'>12312 Culver Blvd.Los Angeles, CA – 90066</p>
                    <p className='boxPhone'>310 202-4505</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Palmdale Jail</h3>
                    <p className='boxAddress'>1020 E. Palmdale Blvd.Palmdale, CA – 93550</p>
                    <p className='boxPhone'>661 267-4300</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Parker Center</h3>
                    <p className='boxAddress'>150 N. Los Angeles St.Los Angeles, CA – 90012</p>
                    <p className='boxPhone'>213 485-2555</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Pasadena Jail</h3>
                    <p className='boxAddress'>207 N. Garfield Ave.Pasadena, CA – 91101</p>
                    <p className='boxPhone'>626 744-4501</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Pico Rivera Jail</h3>
                    <p className='boxAddress'>6631 Passons Blvd.Pico Rivera , CA – 90660</p>
                    <p className='boxPhone'>562 949-2421</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Pitchess Detention Center</h3>
                    <p className='boxAddress'>29310 The Old Road Castaic , CA – 91384</p>
                    <p className='boxPhone'>213 473-6080</p>
                </div>


                {/* /////// */}


                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Pitchess Detention Center</h3>
                    <p className='boxAddress'>North Facility 29320 The Old Road Castaic, CA – 91384</p>
                    <p className='boxPhone'>213 473-6080</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Pitchess Detention Center</h3>
                    <p className='boxAddress'>South Facility 29330 The Old Road Castaic , CA – 91384</p>
                    <p className='boxPhone'>213 473-6080</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Pomona Jail</h3>
                    <p className='boxAddress'>490 W. Mission Blvd.Pomona, CA – 91766</p>
                    <p className='boxPhone'>909 620-2131</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>San Dimas Jail</h3>
                    <p className='boxAddress'>401 Diamond St.Redondo Beach , CA – 90277</p>
                    <p className='boxPhone'>310 318-0616</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>San Dimas Jail</h3>
                    <p className='boxAddress'>270 S. Walnut Avenue San Dimas, CA – 91773</p>
                    <p className='boxPhone'>909 599-1261</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>San Fernando Jail</h3>
                    <p className='boxAddress'>910 First St.San Fernando , CA – 91340</p>
                    <p className='boxPhone'>818 898-1267</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Santa Clarita Jail</h3>
                    <p className='boxAddress'>23740 Magic Mountain Parkway Valencia, CA – 91355</p>
                    <p className='boxPhone'>661 255-1121</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Santa Monica Jail</h3>
                    <p className='boxAddress'>1685 Main St.Santa Monica , CA – 90401</p>
                    <p className='boxPhone'>310 458-8482</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Signal Hill Jail</h3>
                    <p className='boxAddress'>2175 Cherry Ave.Signal Hill, CA – 90755</p>
                    <p className='boxPhone'>562 989-7200</p>
                </div>



                {/* /////// */}


                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>South Gate Jail</h3>
                    <p className='boxAddress'>8620 California Ave.South Gate , CA – 90280</p>
                    <p className='boxPhone'>323 563-5400</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Southeast Area Jail</h3>
                    <p className='boxAddress'>145 W. 108th St.Los Angeles, CA – 90061</p>
                    <p className='boxPhone'>213 485-6930</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Southwest Area Jail</h3>
                    <p className='boxAddress'>1546 W. Martin Luther King Blvd.Los Angeles , CA – 90062</p>
                    <p className='boxPhone'>213 485-2615</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Sybil Brand Institute for Women</h3>
                    <p className='boxAddress'>4500 E. City Terrace Dr.Monterey Park, CA – 90063</p>
                    <p className='boxPhone'>213 473-6080</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Temple City Jail</h3>
                    <p className='boxAddress'>8838 Las Tunas Dr.Temple City, CA – 91780</p>
                    <p className='boxPhone'>626 285-7171</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Torrance Jail</h3>
                    <p className='boxAddress'>3300 Civic Center Drive Torrance, CA – 90503</p>
                    <p className='boxPhone'>310 618-5631</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Twin Towers Correctional Facility</h3>
                    <p className='boxAddress'>450 Bauchet St.Los Angeles , CA – 90012</p>
                    <p className='boxPhone'>213 473-6080</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Valley Jail Section</h3>
                    <p className='boxAddress'>6240 Sylmar Ave.Van Nuys , CA – 91401</p>
                    <p className='boxPhone'>818 756-8358</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Vernon Jail</h3>
                    <p className='boxAddress'>4305 Santa Fe Ave.Vernon, CA – 90058</p>
                    <p className='boxPhone'>323 587-5171</p>
                </div>



                {/* /////// */}


                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Walnut Jail</h3>
                    <p className='boxAddress'>21695 E. Valley Blvd Walnut, CA – 91789</p>
                    <p className='boxPhone'>909 595-4957</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>West Covina Jail</h3>
                    <p className='boxAddress'>1444 W. Garvey Ave West Covina, CA – 91790</p>
                    <p className='boxPhone'>626 939-8550</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>West Hollywood Jail</h3>
                    <p className='boxAddress'>720 San Vicente Blvd.West Hollywood, CA – 90069</p>
                    <p className='boxPhone'>310 855-8850</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>West Valley Area Jail</h3>
                    <p className='boxAddress'>19020 Van Owen St.Reseda , CA – 91335</p>
                    <p className='boxPhone'>818 756-8545</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Whittier Jail</h3>
                    <p className='boxAddress'>7315 Painter Ave Whittier, CA – 90602</p>
                    <p className='boxPhone'>562 945-8250</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Wilshire Area Jail</h3>
                    <p className='boxAddress'>4861 W. Venice Blvd.Los Angeles, CA – 90019</p>
                    <p className='boxPhone'>213 485-4027</p>
                </div>


            </div>


            <h2 className='blueBoxSideHeadings' id='marginAdjustment' data-aos="fade-left">Orange County Jail Locations</h2>

            <div className='blueBoxesDiv'>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Barstow District</h3>
                    <p className='boxAddress'>425 S. Harbor Blvd.Anaheim, CA – 92805</p>
                    <p className='boxPhone'>714 765-1900</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Big Bear District</h3>
                    <p className='boxAddress'>6650 Beach Blvd.Buena Park , CA – 90620</p>
                    <p className='boxPhone'>714 562-3939</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Chino District</h3>
                    <p className='boxAddress'>550 N. Flower St.Santa Ana , CA – 92703</p>
                    <p className='boxPhone'>714 647-4666</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Fontana District</h3>
                    <p className='boxAddress'>99 Fair Dr.Costa Mesa , CA – 92626</p>
                    <p className='boxPhone'>92626-6535</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Joshua Tree District</h3>
                    <p className='boxAddress'>5275 Orange Ave Cypress, CA – 90630</p>
                    <p className='boxPhone'>714 229-6652</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Needles District</h3>
                    <p className='boxAddress'>237 W. Commonwealth Fullerton, CA – 92832</p>
                    <p className='boxPhone'>714 738-6722</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Rancho Cucamonga District</h3>
                    <p className='boxAddress'>2000 Main St.Huntington Beach, CA – 92648</p>
                    <p className='boxPhone'>714 536-5691</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>San Bernardino District Criminal</h3>
                    <p className='boxAddress'>13502 Musick Irvine, CA – 92618</p>
                    <p className='boxPhone'>949 855-2612</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Victorville District</h3>
                    <p className='boxAddress'>150 N. Euclid Ave.La Habra, CA – 90631</p>
                    <p className='boxPhone'>562 905-9750</p>
                </div>

                {/* //////// */}

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>La Palma Jail</h3>
                    <p className='boxAddress'>7792 Walker St.La Palma , CA – 90623-1770</p>
                    <p className='boxPhone'>714 523-4552</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Laguna Beach Jail</h3>
                    <p className='boxAddress'>505 Forest Ave.Laguna Beach, CA – 92651</p>
                    <p className='boxPhone'>949 497-0701</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Newport Beach Jail</h3>
                    <p className='boxAddress'>870 Santa Barbara Dr.Newport Beach , CA – 92660</p>
                    <p className='boxPhone'>949-644-3672</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Santa Ana Jail</h3>
                    <p className='boxAddress'>60 Civic Center Plaza Santa Ana, CA – 92701-4010</p>
                    <p className='boxPhone'>714 245-8100</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Theo Lacy Detention Center</h3>
                    <p className='boxAddress'>501 City Dr. South Orange, CA – 92868</p>
                    <p className='boxPhone'>714 647-4666</p>
                </div>

            </div>





            <h2 className='blueBoxSideHeadings' id='marginAdjustment' data-aos="fade-left">Riverside County Jail Locations</h2>

            <div className='blueBoxesDiv'>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Banning Correctional Facility</h3>
                    <p className='boxAddress'>1627 S. Hargrave Banning , CA – 92220</p>
                    <p className='boxPhone'>951 922-7300</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Blythe Jail</h3>
                    <p className='boxAddress'>260 N. Spring St.Blythe, CA – 92225</p>
                    <p className='boxPhone'>760 921-7950</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Corona Jail</h3>
                    <p className='boxAddress'>849 W. 6th St.Corona, CA – 92882</p>
                    <p className='boxPhone'>951 736-2330</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Hemet Jail</h3>
                    <p className='boxAddress'>450 E. Latham St.Hemet, CA – 92543</p>
                    <p className='boxPhone'>951 765-2400</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Indio Jail</h3>
                    <p className='boxAddress'>46057 Oasis Indio, CA – 92201</p>
                    <p className='boxPhone'>760 863-8252</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Palm Springs Jail</h3>
                    <p className='boxAddress'>200 S. Civic Dr.Palm Springs, CA – 92262</p>
                    <p className='boxPhone'>760 323-8110</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Robert Presley Detention Center</h3>
                    <p className='boxAddress'>4000 Orange St.Riverside, CA – 92501</p>
                    <p className='boxPhone'>951 955-4500</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Southwest Detention Center</h3>
                    <p className='boxAddress'>30755 Auld Rd.Murrieta, CA – 92563</p>
                    <p className='boxPhone'>951 696-3050</p>
                </div>


            </div>





            <h2 className='blueBoxSideHeadings' id='marginAdjustment' data-aos="fade-left">San Bernardino County Jail Locations</h2>

            <div className='blueBoxesDiv'>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Central Detention Center</h3>
                    <p className='boxAddress'>630 E. Rialto Ave San Bernardino , CA – 92410</p>
                    <p className='boxPhone'>909 386-0969</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>West Valley Detention Center</h3>
                    <p className='boxAddress'>9500 Etiwanda Ave.Rancho Cucamonga , CA – 91739</p>
                    <p className='boxPhone'>909 350-2476</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Adelanto Detention Facility</h3>
                    <p className='boxAddress'>9438 Commerce Way.Adelanto, CA 92301</p>
                    <p className='boxPhone'>(760) 530-9300</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Barstow Jail</h3>
                    <p className='boxAddress'>225 E Mountain View St.Barstow, CA 92311</p>
                    <p className='boxPhone'>(760) 256-4846</p>
                </div>


            </div>




            <h2 className='blueBoxSideHeadings' id='marginAdjustment' data-aos="fade-left">San Diego County Jail Locations</h2>

            <div className='blueBoxesDiv'>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Descanso Detention Facility</h3>
                    <p className='boxAddress'>7878 Cambell Ranch Rd.Alpine , CA – 91901</p>
                    <p className='boxPhone'>619 659-5530</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>George F. Bailey Detention Facility</h3>
                    <p className='boxAddress'>446 Alta Rd.San Diego , CA – 92154</p>
                    <p className='boxPhone'>619 661-2608</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Las Colinas Womens Detention Facility</h3>
                    <p className='boxAddress'>9000 Cottonwood Ave.Santee , CA – 92071</p>
                    <p className='boxPhone'>619 258-3176</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>R.J. Donovan Correctional Facility</h3>
                    <p className='boxAddress'>Donovan State Prison Road San Diego, CA – 92154</p>
                    <p className='boxPhone'>619 661-5500</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>San Diego Central Jail</h3>
                    <p className='boxAddress'>1173 Front Street San Diego, CA – 92112</p>
                    <p className='boxPhone'>619 615-2700</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>San Diego City Jail</h3>
                    <p className='boxAddress'>446 Alta Rd.San Diego , CA – 92154</p>
                    <p className='boxPhone'>619 661-7205</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>South Bay Detention Facility</h3>
                    <p className='boxAddress'>500 Third Ave.Chula Vista , CA – 91910</p>
                    <p className='boxPhone'>619 691-4810</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Vista Detention Facility</h3>
                    <p className='boxAddress'>325 S. Melrose, Ste. 200 Vista, CA – 92083</p>
                    <p className='boxPhone'>760 940-4473</p>
                </div>


            </div>




            <h2 className='blueBoxSideHeadings' id='marginAdjustment' data-aos="fade-left">LAPD local Community Police Station</h2>

            <div className='blueBoxesDiv'>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Central Community Police Station</h3>
                    <p className='boxAddress'>251 East Sixth Street Los Angeles, CA 90014</p>
                    <p className='boxPhone'>213-486-6606</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Devonshire Community Police Station</h3>
                    <p className='boxAddress'>10250 Etiwanda Avenue Northridge, CA 91325</p>
                    <p className='boxPhone'>818-832-0633</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Foothill Community Police Station</h3>
                    <p className='boxAddress'>12760 Osborne Pacoima, CA 91331</p>
                    <p className='boxPhone'>818-756-8861</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Harbor Community Police Station</h3>
                    <p className='boxAddress'>2175 John S. Gibson Blvd.San Pedro, CA 90731</p>
                    <p className='boxPhone'>310-726-7700</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Hollenbeck Community Police Station</h3>
                    <p className='boxAddress'>2111 E. First Street Los Angeles, CA 90033</p>
                    <p className='boxPhone'>323-342-4100</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Hollywood Community Police Station</h3>
                    <p className='boxAddress'>1358 N. Wilcox Hollywood, CA 90028</p>
                    <p className='boxPhone'>213-972-2971</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Mission Community Police Station</h3>
                    <p className='boxAddress'>11121 Sepulveda Blvd Mission Hills, CA 91345</p>
                    <p className='boxPhone'>818-838-9800</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Newton Community Police Station</h3>
                    <p className='boxAddress'>3400 Central Avenue Los Angeles, CA 90011</p>
                    <p className='boxPhone'>323-846-6547</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>North Hollywood Community Police Station</h3>
                    <p className='boxAddress'>11640 Burbank Boulevard North Hollywood, CA 91601</p>
                    <p className='boxPhone'>818-623-4016</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Northeast Community Police Station</h3>
                    <p className='boxAddress'>3353 San Fernando Road Los Angeles, CA 90065</p>
                    <p className='boxPhone'>323-561-3211</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Olympic Community Police Station</h3>
                    <p className='boxAddress'>1130 South Vermont Los Angeles, CA 90006</p>
                    <p className='boxPhone'>213-382-9102v</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Pacific Community Police Station</h3>
                    <p className='boxAddress'>720 San Vicente Blvd.West Hollywood, CA – 90069</p>
                    <p className='boxPhone'>310 855-8850</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Rampart Community Police Station</h3>
                    <p className='boxAddress'>1401 W. Sixth Street Los Angeles, CA 90017</p>
                    <p className='boxPhone'>213-484-3400</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>77th Community Police Station</h3>
                    <p className='boxAddress'>7600 Broadway Los Angeles, CA 90003</p>
                    <p className='boxPhone'>213-485-4164</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Southeast Community Police Station</h3>
                    <p className='boxAddress'>145 W. 108th Street Los Angeles, CA 90061</p>
                    <p className='boxPhone'>213-972-7828</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Southwest Community Police Station</h3>
                    <p className='boxAddress'>145 W. 108th Street Los Angeles, CA 90061</p>
                    <p className='boxPhone'>213-972-7828</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Topanga Community Police Station</h3>
                    <p className='boxAddress'>21501 Schoenborn Street Canoga Park, CA 91304</p>
                    <p className='boxPhone'>818-756-4800</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Van Nuys Community Police Station</h3>
                    <p className='boxAddress'>6240 Sylmar Avenue Van Nuys, CA 91401</p>
                    <p className='boxPhone'>818-374-9500</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>West Los Angeles Community Police Station</h3>
                    <p className='boxAddress'>1663 Butler Avenue Los Angeles, CA 90025</p>
                    <p className='boxPhone'>310-444-0701</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>West Valley Community Police Station</h3>
                    <p className='boxAddress'>19020 Vanowen Street Reseda, CA 91335</p>
                    <p className='boxPhone'>818-374-7611</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>Wilshire Community Police Station</h3>
                    <p className='boxAddress'>4861 West Venice Boulevard Los Angeles, CA 90019</p>
                    <p className='boxPhone'>213-473-0476</p>
                </div>


            </div>




            <h2 className='blueBoxSideHeadings' id='marginAdjustment' data-aos="fade-left">Traffic Divisions</h2>

            <div className='blueBoxesDiv'>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>Central Traffic Division</h3>
                    <p className='boxAddress'>251 East 6th Street Los Angeles, CA 90014</p>
                    <p className='boxPhone'>213-833-3746</p>
                </div>

                <div className='blueBox' data-aos="fade-up-left">
                    <h3 className='boxHeadingInfo'>South Traffic Division</h3>
                    <p className='boxAddress'>4125 S. Crenshaw Boulevard Los Angeles, CA 90008</p>
                    <p className='boxPhone'>323-421-2577</p>
                </div>

                <div className='blueBox' data-aos="fade-down-left">
                    <h3 className='boxHeadingInfo'>Valley Traffic Division</h3>
                    <p className='boxAddress'>7870 Nollan Place Panorama City, CA 91402</p>
                    <p className='boxPhone'>818-644-8000</p>
                </div>

                <div className='blueBox' data-aos="fade-up-right">
                    <h3 className='boxHeadingInfo'>West Traffic Division</h3>
                    <p className='boxAddress'>4849 W. Venice Boulevard Los Angeles, CA 90019</p>
                    <p className='boxPhone'>213-473-0222</p>
                </div>



            </div>





            {/* Your BailBondsMan */}

            <div id='bondsManHeading' data-aos="flip-up" data-aos-duration="1000">YOUR BAIL BONDSMAN – A TRUSTED RESOURCE</div>

            <div id='unOrderLists'>

                <ul>
                    <li className='array1'>How Bail Bonds Work</li>
                    <div className='lineDiv'></div>
                    <li className='array1'>Bail Bond Forms Online</li>
                    <div className='lineDiv'></div>
                    <li className='array1'>Bail Bond Fees and Costs</li>
                    <div className='lineDiv'></div>
                    <li className='array1'>Bail: Individual Rights, Public Safety</li>
                    <div className='lineDiv'></div>
                </ul>


                <ul>
                    <li className='array1'>Questions to Ask a Bail Bondsman</li>
                    <div className='lineDiv'></div>
                    <li className='array1'>No Collateral Bail Bonds</li>
                    <div className='lineDiv'></div>
                    <li className='array1'>Bail Bond Payment Options</li>
                    <div className='lineDiv'></div>
                    <li className='array1'>Bail Bond Contract: Responsibilities</li>
                    <div className='lineDiv'></div>
                </ul>

            </div>


            <div id='underLine'></div>

            <div id='designAndHeading'>
                <img src={equalStar} alt='' className='equalStarImg'></img>
                <h2 id='meetOurPartnerHeading'>Meet The Partners</h2>
                <img src={equalStar} alt='' className='equalStarImg'></img>
            </div>

            <img src={logos} alt='' id='bottomPartnerLogos' data-aos="fade-down" data-aos-duration="1000"></img>


        </div>
    )
}

export default JailLocator