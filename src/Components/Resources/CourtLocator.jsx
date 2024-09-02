import React from 'react'
import { useEffect } from "react";
import './courtlocator.css'
import rightExtend from '../Photos/rightExtend.png'
import equalStar from '../Photos/equalStar.png'
import logos from '../Photos/logos.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function CourtLocator() {
    useEffect(() => {
        AOS.init();
    }, [])
    AOS.init({
        duration: 400,
        once: false,
    })

    return (
        <div>

            <div id='courtLocatorImgDiv1'>
                <div id='courtHeadingDiv'>
                    {/* <img style={{marginLeft:"20%"}} src={rightExtend} alt='' id='rightExtendImg' data-aos="fade-left" data-aos-duration="900"></img> */}
                    <h1 id='courtHeading' data-aos="fade-right" data-aos-duration="1000">Court Locator</h1>
                </div>
            </div>

            <div id='southernCalforniaMainHeading' data-aos="fade-left" data-aos-duration="1000">SOUTHERN CALIFORNIA COURT HOUSE LOCATIONS</div>

            <h2 id='sideHeading' data-aos="fade-up-right" data-aos-duration="700">Los Angeles County</h2>



            {/* central */}
            <h2 className='stateSideHeading' data-aos="fade-up-left">CENTRAL</h2>

            <div className='nameAndAddressDiv'>

                <div className='namesDiv'>
                    <h2 className='nameHeading'>Name</h2>
                    <ul className='nameItems'>
                        <li className='listItemCss'>Central Arraignment Courts</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>Central Civil West Courthouse</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>Clara Shortridge Foltz Criminal</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>East Los Angeles Courthouse</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>Hollywood Courthouse</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>Mental Health Courthouse</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>Metropolitan Courthouse</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>Stanley Mosk Courthouse</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>Stanley Mosk Courthouse</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                    </ul>
                </div>

                <div className='addressDiv'>
                    <h2 className='addressHeading'>Address</h2>
                    <ul className='addressItems'>
                        <li className='listItemCss'>429 Bauchet St., Los Angeles, CA 90012</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>600 South Commonwealth Ave., Los Angeles, CA 90005</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>Justice Center 210 West Temple Street, Los Angeles, CA 90012</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>4848 E.Civic Center Way , Los Angeles, CA 90022</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>5925 Hollywood Blvd., Los Angeles, CA 90028</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>1945 South Hill Street, Los Angeles, CA 90007</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>1945 South Hill Street, Los Angeles, CA 90007</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>111 North Hill Street, Los Angeles, CA 90012</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>110 North Grand Ave., Los Angeles, CA 90012</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                    </ul>
                </div>

            </div>


            {/* CENTRAL JUVENILE */}
            <h2 className='stateSideHeading marginTop' data-aos="zoom-in-right">CENTRAL JUVENILE</h2>

            <div className='nameAndAddressDiv'>

                <div className='namesDiv'>
                    <h2 className='nameHeading'>Name</h2>
                    <ul className='nameItems'>
                        <li className='listItemCss'>Alfred J. McCourtney Juvenile Justice Center</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>David V. Kenyon Juvenile Justice Center (Delinquency)</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>Eastlake Juvenile Court (Delinquency)</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>Edmund D. Edelman Children’s Court (Dependency)</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>Inglewood Juvenile Courthouse (Delinquency)</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>Los Padrinos Juvenile Courthouse (Delinquency)</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>Sylmar Juvenile Courthouse (Delinquency)</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                    </ul>
                </div>

                <div className='addressDiv'>
                    <h2 className='addressHeading'>Address</h2>
                    <ul className='addressItems'>
                        <li className='listItemCss'>1040 W. Avenue J, Lancaster, CA 93534</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>7625 South Central Avenue, Los Angeles, CA 90001</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>1601 Eastlake Avenue, Los Angeles, CA 90033</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>201 Centre Plaza Drive, Monterey Park, CA 91754</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>110 Regent Street, Inglewood, CA 90301</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>7281 East Quill Drive, Downey, CA 90242</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>16350 Filbert Street, Sylmar, CA 91342</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                    </ul>
                </div>

            </div>





            {/* East */}

            <h2 className='stateSideHeading marginTop' data-aos="zoom-in-right">EAST</h2>

            <div className='nameAndAddressDiv'>

                <div className='namesDiv'>
                    <h2 className='nameHeading'>Name</h2>
                    <ul className='nameItems'>
                        <li className='listItemCss'>El Monte Courthouse</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>Pomona Courthouse North</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>Pomona Courthouse South</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>West Covina Courthouse</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                    </ul>
                </div>

                <div className='addressDiv'>
                    <h2 className='addressHeading'>Address</h2>
                    <ul className='addressItems'>
                        <li className='listItemCss'>11234 East Valley Blvd., El Monte, CA 91731</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>350 West Mission Blvd., Pomona, CA 91766</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>400 Civic Center Plaza, Pomona, CA 91766</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>1427 West Covina Parkway, West Covina, CA 91790</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                    </ul>
                </div>

            </div>




            {/* North */}

            <h2 className='stateSideHeading marginTop' data-aos="zoom-in-right">NORTH</h2>

            <div className='nameAndAddressDiv'>

                <div className='namesDiv'>
                    <h2 className='nameHeading'>Name</h2>
                    <ul className='nameItems'>
                        <li className='listItemCss'>Michael Antonovich Antelope Valley Courthouse</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                    </ul>
                </div>

                <div className='addressDiv'>
                    <h2 className='addressHeading'>Address</h2>
                    <ul className='addressItems'>
                        <li className='listItemCss'>42011 4th Street West, Lancaster, CA 93534</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                    </ul>
                </div>

            </div>



            {/* North Central */}

            <h2 className='stateSideHeading marginTop' data-aos="zoom-in-right">NORTH CENTRAL</h2>

            <div className='nameAndAddressDiv'>

                <div className='namesDiv'>
                    <h2 className='nameHeading'>Name</h2>
                    <ul className='nameItems'>
                        <li className='listItemCss'>Burbank Courthouse</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>Glendale Courthouse</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                    </ul>
                </div>

                <div className='addressDiv'>
                    <h2 className='addressHeading'>Address</h2>
                    <ul className='addressItems'>
                        <li className='listItemCss'>300 East Olive, Burbank, CA 91502</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>600 East Broadway, Glendale, CA 91206</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                    </ul>
                </div>

            </div>



            {/* North Valley */}

            <h2 className='stateSideHeading marginTop' data-aos="zoom-in-right">NORTH VALLEY</h2>

            <div className='nameAndAddressDiv'>

                <div className='namesDiv'>
                    <h2 className='nameHeading'>Name</h2>
                    <ul className='nameItems'>
                        <li className='listItemCss'>Chatsworth Courthouse</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>San Fernando Courthouse</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>Santa Clarita Courthouse</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                    </ul>
                </div>

                <div className='addressDiv'>
                    <h2 className='addressHeading'>Address</h2>
                    <ul className='addressItems'>
                        <li className='listItemCss'>9425 Penfield Ave., Chatsworth, CA 91311</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>900 Third Street, San Fernando, CA 91340</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>23747 West Valencia Blvd., Santa Clarita, CA 91355</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                    </ul>
                </div>

            </div>




            {/* NORTHEAST */}


            <h2 className='stateSideHeading marginTop' data-aos="zoom-in-right">NORTHEAST</h2>

            <div className='nameAndAddressDiv'>

                <div className='namesDiv'>
                    <h2 className='nameHeading'>Name</h2>
                    <ul className='nameItems'>
                        <li className='listItemCss'>Alhambra Courthouse</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>Pasadena Courthouse</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                    </ul>
                </div>

                <div className='addressDiv'>
                    <h2 className='addressHeading'>Address</h2>
                    <ul className='addressItems'>
                        <li className='listItemCss'>150 West Commonwealth, Alhambra, CA 91801</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>300 East Walnut Ave., Pasadena, CA 91101</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                    </ul>
                </div>

            </div>




            {/* NORTHWEST */}

            <h2 className='stateSideHeading marginTop' data-aos="zoom-in-right">NORTHWEST</h2>

            <div className='nameAndAddressDiv'>

                <div className='namesDiv'>
                    <h2 className='nameHeading'>Name</h2>
                    <ul className='nameItems'>
                        <li className='listItemCss'>Van Nuys Courthouse East</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>Van Nuys Courthouse West</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                    </ul>
                </div>

                <div className='addressDiv'>
                    <h2 className='addressHeading'>Address</h2>
                    <ul className='addressItems'>
                        <li className='listItemCss'>6230 Sylmar Ave., Van Nuys, CA 91401</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>14400 Erwin Street Mall, Van Nuys, CA 91401</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                    </ul>
                </div>

            </div>


            {/* SOUTH */}

            <h2 className='stateSideHeading marginTop' data-aos="zoom-in-right">SOUTH</h2>

            <div className='nameAndAddressDiv'>

                <div className='namesDiv'>
                    <h2 className='nameHeading'>Name</h2>
                    <ul className='nameItems'>
                        <li className='listItemCss'>Catalina Courthouse</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>Long Beach Courthouse</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>San Pedro Courthouse</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>San Pedro Courthouse Annex</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                    </ul>
                </div>

                <div className='addressDiv'>
                    <h2 className='addressHeading'>Address</h2>
                    <ul className='addressItems'>
                        <li className='listItemCss'>215 Summer Avenue, Avalon, CA 90704</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>415 West Ocean Blvd., Long Beach, CA 90802</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>505 South Centre Street, San Pedro, CA 90731</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                        <li className='listItemCss'>638 South Beacon Street, San Pedro, CA 90731</li>
                        <div className='lineDiv' data-aos="zoom-in-up"></div>
                    </ul>
                </div>

            </div>






            {/* blueBoxs */}

            <h2 className='blueBoxSideHeadings1' id='marginAdjustment1'>ORANGE COUNTY</h2>

            <div className='blueBoxesDiv'>
                <div className='blueBox' data-aos="zoom-out-right">
                    <h3 className='boxHeadingInfo1'>Riverside County Superior Court – Autry</h3>
                    <p className='boxAddress'>3700A Tachevah Drive 107, Palm Springs CA 92262</p>
                    <p className='boxPhone'>Phone: 951-955-4600</p>
                </div>

                <div className='blueBox ' data-aos="zoom-out-down">
                    <h3 className='boxHeadingInfo1'>Harbor Justice Center Laguna Hills Facility</h3>
                    <p className='boxAddress'>23141 Moulton Parkway</p>
                    <p className='boxPhone'>Laguna Hills, CA 92653-1206</p>
                </div>

                <div className='blueBox '  data-aos="zoom-out-left">
                    <h3 className='boxHeadingInfo1'>Harbor Justice Center Newport Beach Facility</h3>
                    <p className='boxAddress'>4601 Jamboree Road</p>
                    <p className='boxPhone'>Newport Beach, CA 92660-2595</p>
                </div>

                <div className='blueBox' data-aos="zoom-out-right">
                    <h3 className='boxHeadingInfo1'>Lamoreaux Justice Center</h3>
                    <p className='boxAddress'>341 The City Drive South</p>
                    <p className='boxPhone'>Orange, CA 92868-3205</p>
                </div>

                <div className='blueBox ' data-aos="zoom-out-down">
                    <h3 className='boxHeadingInfo1'>North Justice Center</h3>
                    <p className='boxAddress'>1275 North Berkeley Avenue</p>
                    <p className='boxPhone'>Fullerton, CA 92832-1258</p>
                </div>

                <div className='blueBox '  data-aos="zoom-out-left">
                    <h3 className='boxHeadingInfo1'>West Justice Center</h3>
                    <p className='boxAddress'>8141 13th Street</p>
                    <p className='boxPhone'>Westminster, CA 92683-4593</p>
                </div>
            </div>


            {/* River Side County */}

            <h2 className='blueBoxSideHeadings1'>RIVERSIDE COUNTY</h2>

            <div className='blueBoxesDiv'>
                <div className='blueBox' data-aos="zoom-out-right">
                    <h3 className='boxHeadingInfo1'>Riverside County Superior Court – Autry</h3>
                    <p className='boxAddress'>3700A Tachevah Drive 107, Palm Springs CA 92262</p>
                    <p className='boxPhone'>Phone: 951-955-4600</p>
                </div>

                <div className='blueBox ' data-aos="zoom-out-down">
                    <h3 className='boxHeadingInfo1'>Riverside County Superior Court – Banning Court</h3>
                    <p className='boxAddress'>135 N. Alessandro Road, Banning CA 92220</p>
                    <p className='boxPhone'>Criminal: 951-922-7145</p>
                </div>

                <div className='blueBox ' data-aos="zoom-out-left">
                    <h3 className='boxHeadingInfo1'>Riverside County Superior Court – Corona</h3>
                    <p className='boxAddress'>505 S Buena Vista, Corona CA 92882</p>
                    <p className='boxPhone'>Phone: 951-341-8876</p>
                </div>

                <div className='blueBox' data-aos="zoom-out-right">
                    <h3 className='boxHeadingInfo1'>Riverside County Superior Court – Indio Annex</h3>
                    <p className='boxAddress'>82675 State Highway 111, Indio CA 92201</p>
                    <p className='boxPhone'>Phone: 760-863-8426</p>
                </div>

                <div className='blueBox ' data-aos="zoom-out-down">
                    <h3 className='boxHeadingInfo1'>Riverside County Superior Court – Moreno Valley Court</h3>
                    <p className='boxAddress'>13800 Heacock St D201, Moreno Valley CA 92553</p>
                    <p className='boxPhone'>Traffic: 951-955-9422 Small Claims: 951-955-4600</p>
                </div>

                <div className='blueBox ' data-aos="zoom-out-left">
                    <h3 className='boxHeadingInfo1'>Riverside County Superior Court – Palm Springs</h3>
                    <p className='boxAddress'>3255 E Tahquitz Canyon Way, Palm Springs</p>
                    <p className='boxPhone'>Phone: 760-778-2316</p>
                </div>

                <div className='blueBox' data-aos="zoom-out-right">
                    <h3 className='boxHeadingInfo1'>Riverside County Superior Court – Riverside Hall of Justice</h3>
                    <p className='boxAddress'>4100 Main Street, PO Box 431, Riverside CA 92501</p>
                    <p className='boxPhone'>Phone: 951-955-4600</p>
                </div>

                <div className='blueBox ' data-aos="zoom-out-down">
                    <h3 className='boxHeadingInfo1'>Riverside County Superior Court – Riverside Juvenile Court</h3>
                    <p className='boxAddress'>9991 County Farm Road, Riverside CA 92503</p>
                    <p className='boxPhone'>Phone: 951-358-4137</p>
                </div>

                <div className='blueBox ' data-aos="zoom-out-left">
                    <h3 className='boxHeadingInfo1'>Riverside County Superior Court – Blythe Court</h3>
                    <p className='boxAddress'>265 N. Broadway, Blythe CA 92225</p>
                    <p className='boxPhone'>Civil: 760-921-5903</p>
                </div>

                <div className='blueBox' data-aos="zoom-out-right">
                    <h3 className='boxHeadingInfo1'>Riverside County Superior Court – Indio Juvenile Court</h3>
                    <p className='boxAddress'>47-671 Oasis Street, Indio CA 92201</p>
                    <p className='boxPhone'>Phone: 760-863-8992</p>
                </div>

                <div className='blueBox ' data-aos="zoom-out-down">
                    <h3 className='boxHeadingInfo1'>Riverside County Superior Court – Larson Justice Center</h3>
                    <p className='boxAddress'>46-200 Oasis Street, Indio CA 92201</p>
                    <p className='boxPhone'>Phone: 760-863-8426</p>
                </div>

                <div className='blueBox ' data-aos="zoom-out-left">
                    <h3 className='boxHeadingInfo1'>Riverside County Superior Court – Southwest Justice Center</h3>
                    <p className='boxAddress'>30755-D Auld Road, Murrieta CA 92563</p>
                    <p className='boxPhone'>Phone: 951-304-5000</p>
                </div>
            </div>



            {/* San County */}

            <h2 className='blueBoxSideHeadings1'>SAN BERNARDINO COUNTY</h2>

            <div className='blueBoxesDiv'>
                <div className='blueBox' data-aos="zoom-out-right">
                    <h3 className='boxHeadingInfo1'>Barstow District</h3>
                    <p className='boxAddress'>235 East Mountain View Avenue, Barstow, CA 92311</p>
                    <p className='boxPhone'>General Information – (760) 256-4758</p>
                </div>

                <div className='blueBox ' data-aos="zoom-out-down">
                    <h3 className='boxHeadingInfo1'>Big Bear District</h3>
                    <p className='boxAddress'>477 Summit Boulevard,Big Bear Lake, CA 92315</p>
                    <p className='boxPhone'>General Information – (909) 866-0150</p>
                </div>

                <div className='blueBox'>
                    <h3 className='boxHeadingInfo1'>Chino District</h3>
                    <p className='boxAddress'>13260 Central Avenue, Chino, CA 91710</p>
                    <p className='boxPhone'>General Information – (909) 356-5337</p>
                </div>

                <div className='blueBox' data-aos="zoom-out-right">
                    <h3 className='boxHeadingInfo1'>Fontana District</h3>
                    <p className='boxAddress'>17780 Arrow Boulevard, Fontana, CA 92335</p>
                    <p className='boxPhone'>General Information – (909) 350-9322</p>
                </div>

                <div className='blueBox ' data-aos="zoom-out-down">
                    <h3 className='boxHeadingInfo1'>Joshua Tree District</h3>
                    <p className='boxAddress'>6527 White Feather Road, Joshua Tree, CA 92252</p>
                    <p className='boxPhone'>Civil Information – (760) 366-5770</p>
                </div>

                <div className='blueBox ' data-aos="zoom-out-left">
                    <h3 className='boxHeadingInfo1'>Needles District</h3>
                    <p className='boxAddress'>1111 Bailey Street, Needles, CA 92363</p>
                    <p className='boxPhone'>General Information – (760) 326-9245</p>
                </div>

                <div className='blueBox' data-aos="zoom-out-right">
                    <h3 className='boxHeadingInfo1'>Rancho Cucamonga District</h3>
                    <p className='boxAddress'>8303 Haven Avenue, Rancho Cucamonga, CA 91730</p>
                    <p className='boxPhone'>Criminal – (909) 350-9764</p>
                </div>

                <div className='blueBox ' data-aos="zoom-out-down">
                    <h3 className='boxHeadingInfo1'>San Bernardino District Criminal</h3>
                    <p className='boxAddress'>351 North Arrowhead Avenue, San</p>
                    <p className='boxPhone'>Bernardino, CA. 92415-0240</p>
                </div>

                <div className='blueBox ' data-aos="zoom-out-left">
                    <h3 className='boxHeadingInfo1'>Victorville District</h3>
                    <p className='boxAddress'>14455 Civic Drive , Victorville, CA 92392</p>
                    <p className='boxPhone'>General Information – (760) 245-6215</p>
                </div>
            </div>



            {/* SAN DIEGO COUNTY COURT HOUSES */}



            <h2 className='blueBoxSideHeadings1'>SAN DIEGO COUNTY COURT HOUSES</h2>

            <div className='blueBoxesDiv'>
                <div className='blueBox' data-aos="zoom-out-right">
                    <h3 className='boxHeadingInfo1'>San Diego County Courthouse</h3>
                    <p className='boxAddress'>220 W. Broadway,San Diego, CA 92101</p>
                    <p className='boxPhone'>(619) 544-6401</p>
                </div>

                <div className='blueBox ' data-aos="zoom-out-down">
                    <h3 className='boxHeadingInfo1'>Vista Courthouse</h3>
                    <p className='boxAddress'>325 S. Melrose, Ste 2400,Vista, CA 92081</p>
                    <p className='boxPhone'>(760) 940-2898</p>
                </div>

                <div className='blueBox ' data-aos="zoom-out-left">
                    <h3 className='boxHeadingInfo1'>El Cajon Courthouse</h3>
                    <p className='boxAddress'>250 E. Main St,El Cajon, CA 92020</p>
                    <p className='boxPhone'>(619) 441-4564</p>
                </div>

                <div className='blueBox' data-aos="zoom-out-right">
                    <h3 className='boxHeadingInfo1'>South Bay Courthouse</h3>
                    <p className='boxAddress'>500 Third Ave,Chula Vista, CA 91910</p>
                    <p className='boxPhone'>(619) 691-4543</p>
                </div>
            </div>



            {/* meet our partners */}

            <div id='bottomLine'></div>
            <div id='partnersDiv'>
                <div id='designAndHeading'>
                    <img src={equalStar} alt='' className='equalStarImg'></img>
                    <h2 id='meetOurPartnerHeading'>Meet The Partners</h2>
                    <img src={equalStar} alt='' className='equalStarImg'></img>
                </div>
            </div>
            <img src={logos} alt='' id='bottomPartnerLogos'></img>


        </div>
    )
}

export default CourtLocator