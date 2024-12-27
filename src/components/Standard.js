import React from 'react';

function Standard() {
  return (
    <>
      <div
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasStandard"
        aria-controls="offcanvasStandard">
        <div
          style={{
            backgroundColor: 'rgba(229, 194, 65, 0.949)',
            color: 'black',
            cursor: 'pointer',
            border: '3px solid azure',
          }}
          className="p-4 rounded text-center">
          <h2>Standard Package</h2>
          <span>
            {' '}
            <span className="fw-bold fs-3">₹ 2199</span> <span>per sqft</span>{' '}
          </span>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasStandard"
        aria-labelledby="offcanvasStandardLabel">
        <div
          style={{ backgroundColor: 'rgba(229, 194, 65, 0.949)' }}
          className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasStandardLabel">
            Standard Package
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {/* Accord */}
          <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Design
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div style={{backgroundColor:'rgba(232, 221, 181, 0.71)'}} class="accordion-body">
                        <ul>
                            <li>
                                <span> <span className='fw-bold'>Schema drawing : </span>All floors (2D)</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Elevation Design : </span>(3D)</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Project Management
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div style={{backgroundColor:'rgba(232, 221, 181, 0.71)'}} class="accordion-body">
                        <ul>
                            <li>
                                <span> <span className='fw-bold'>Site Engineer : </span>One visit per day</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Project Manager : </span>Visit site once in a week</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Structure
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div style={{backgroundColor:'rgba(232, 221, 181, 0.71)'}} class="accordion-body">
                            <li>
                                <span> <span className='fw-bold'>Basement Height : </span>Upto 2 feet</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Steel : </span>Any ISI Brand</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>AAC : </span>For partition walls. 8-inch thickexterior walls | 4 inch thick inner walls</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Cement : </span>Penna / Priya</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>M Sand : </span>Blockwork & all masonry works</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>P Sand : </span>Plastering works</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Concrete Grade : </span>M20 (Manual mix)</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>ceiling Height : </span>10 feet</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Steel Reinforcement : </span>As per standard</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Parapet Wall : </span>3 feet height | 4" thick (only for floor with headroom)</span>
                            </li>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Bathroom & Plumbing
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div style={{backgroundColor:'rgba(232, 221, 181, 0.71)'}} class="accordion-body">
                            <li>
                                <span> <span className='fw-bold'>Wall Tiles : </span>Upto 7' height. Size 2'X1' Vitrified Tile. Upto ₹40/sqft</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Bath & CP Fittings : </span>Cera | Upto ₹12000 per bathroom | Floor mounted EWC, Wall mounted wash basin, Pillar tap, Health faucet, Shower set, 2-in-1 Wall mixer  </span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Plumbing Pipes & Fittings : </span>Inner CPVC, Outer PVC. Brands: Any ISI brand</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Overhead Tank : </span>1000 litres Sintex | 3Layered | UV Protected | White colour</span>
                            </li>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Flooring
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div style={{backgroundColor:'rgba(232, 221, 181, 0.71)'}} class="accordion-body">
                            <li>
                                <span> <span className='fw-bold'>Living, Dining, Bedrooms & Kitchen : </span>2'X2' | Vitrified Tiles Upto ₹45/sqft. Anuj / Sparrow</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Balcony & Utility : </span>Size 1'X1' | Upto 35/sqft</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Staircase : </span>Size 1'X1' Tile : Upto 35/sqft</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Car Parking : </span>1'X1' Parking Tile | Upto 35/sqft</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Terrace Flooring : </span>Screed concreting with waterproofing</span>
                            </li>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Kitchen & Dining
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div style={{backgroundColor:'rgba(232, 221, 181, 0.71)'}} class="accordion-body">
                            <li>
                                <span> <span className='fw-bold'>Wall Tile : </span>Vitrified Tile (2'X1) | Upto ₹45/sqft</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Sink Faucet : </span>Upto ₹900 / No</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Kitchen Sink : </span>Stainless steel single bowl upto ₹2800</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Dining : </span>Wall mounted wash basin</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Kitchen Granite top : </span>Upto ₹90/sqft</span>
                            </li>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Door Windows & Railing
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div style={{backgroundColor:'rgba(232, 221, 181, 0.71)'}} class="accordion-body">
                            <li>
                                <span> <span className='fw-bold'>Main Door : </span>Malaysian teak door & teak fram | 32mm thickness | 5'X3' thick frame | 7' height 3.5 feet width</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Room Doors : </span>White panel door | Sal wood frame | 7'X3'</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Bathroom Door : </span>PVC door | 7'X2.5'</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Windows : </span>Aluminium sliding window | Max 4'X4' | One window per room | 5mm clear glass</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Staircase Railing : </span>MS Railing</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Balcony Railing : </span>MS Railing</span>
                            </li>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Painting
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div style={{backgroundColor:'rgba(232, 221, 181, 0.71)'}} class="accordion-body">
                            <li>
                                <span> <span className='fw-bold'>Inner Wall Putty : </span>2 coats of wall putty | Any ISI brand</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Wall Painting : </span>1 coat of Primer | 2 coats of tractor emulsion | Any ISI brand</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Ceiling Painting : </span>1 coat of Primer | 2 coats of tractor emulsion | Any ISI brand</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Exterior Paint : </span>1 coat of Primer | 2 coats of Ace | Any ISI brand</span>
                            </li>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Electrical
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div style={{backgroundColor:'rgba(232, 221, 181, 0.71)'}} class="accordion-body">
                            <li>
                                <span> <span className='fw-bold'>Wires : </span>Essar</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Switches : </span>Fybros</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Bedroom : </span>2 Switch box(8-module). One at entrance and one at bed-side</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Bathroom : </span>1 Switch box(inner) 4-module, 1 Switch box(outer) 3-module. Point for heater & exhaust</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Living room : </span>Upto 4 switch box (8 module)</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Dining : </span>1 Switch (8 module)</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Pooja : </span>1 Switch (3 module)</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Kitchen : </span>3 Switch box (6 module). Point for HOB, Chimney, RO</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Utility : </span>1 Switch box (4 module)</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>AC Points : </span>1 for each bedroom</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Entrance : </span>1 Switch box (6 module)</span>
                            </li>
                            <li>
                                <span> <span className='fw-bold'>Balconies : </span>1 Switch box (3 module)</span>
                            </li>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        What's Not Included
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div style={{backgroundColor:'rgba(232, 221, 181, 0.71)'}} class="accordion-body">
                        <ul>
                            <li>Compound Wall @ 425/sqft & Gate</li>
                            <li>Sump & Septic Tank @ 24/litre</li>
                            <li>Lift, Lift Pit and shaft</li>
                            <li>Electricity connection</li>
                            <li>Building plan approval</li>
                            <li>Elevation special materials</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Standard;
