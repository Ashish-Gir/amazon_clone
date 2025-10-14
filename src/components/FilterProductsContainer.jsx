import React from 'react'
import Categories from './Categories'

const FilterProductsContainer = () => {
  return (
   
      <div className="filterContainer">
         
           <Categories/>
          <div className="filter-div filterbyPrice">
            <h3>Filter by price</h3>
            <div className="mb-2 filterByPriceSection">
              <div className="filter-input-div">
                <input
                  type="checkbox"
                  name="under-5000"
                  id
                  defaultValue="under-5000"
                />
                <span>Under 5000</span>
              </div>
              <div className="filter-input-div">
                <input
                  type="checkbox"
                  name="under-5000"
                  id
                  defaultValue="under-5000"
                />
                <span>Under 7000</span>
              </div>
              <div className="filter-input-div">
                <input
                  type="checkbox"
                  name="under-5000"
                  id
                  defaultValue="under-5000"
                />
                <span>Under 10000</span>
              </div>
              <div className="filter-input-div">
                <input
                  type="checkbox"
                  name="under-5000"
                  id
                  defaultValue="under-5000"
                />
                <span>Under 50000</span>
              </div>
              <div className="filter-input-div">
                <input
                  type="checkbox"
                  name="under-5000"
                  id
                  defaultValue="under-5000"
                />
                <span>Under 100000</span>
              </div>
            </div>
            <h3 style={{marginTop:"20px"}}>sort by price</h3>
            <div className="filter-input-div">
              <input
                type="radio"
                name="sortbyprice"
                id
                defaultValue="priceAsc"
              />
              <span>low to high</span>
            </div>
            <div className="filter-input-div">
              <input
                type="radio"
                name="sortbyprice"
                id
                defaultValue="priceDesc"
              />
              <span>high to low</span>
            </div>
            <div className="filter-input-div">
              <input type="radio" name="sortbyprice" id defaultValue="all" />
              <span>all</span>
            </div>
            <h3 className="mt-3" style={{marginTop:"20px"}} >Custom</h3>
            <div className="priceSlider">
              <input type="number" name="minvalue" id defaultValue={0} />
              <input type="range" name="sortbyprice" id defaultValue="all" />
              <input type="number" name="maxvalue" id defaultValue={10000} />
            </div>
          </div>
          <div className="filter-div filterbydiscount">
            <h3>Discount</h3>
            <div className="filter-input-div">
              <input
                type="checkbox"
                name="discount-30"
                id
                defaultValue="discount-30"
              />
              <span>30% Off</span>
            </div>
            <div className="filter-input-div">
              <input
                type="checkbox"
                name="discount-50"
                id
                defaultValue="discount-50"
              />
              <span>50% Off</span>
            </div>
            <div className="filter-input-div">
              <input
                type="checkbox"
                name="discount-70"
                id
                defaultValue="discount-70"
              />
              <span>70% Off</span>
            </div>
          </div>
          <div className="filter-div filterbyname">
            <h3>sort by name</h3>
            <div className="filter-input-div">
              <input type="radio" name="sortbyname" id defaultValue="default" />
              <span>default</span>
            </div>
            <div className="filter-input-div">
              <input type="radio" name="sortbyname" id defaultValue="asc" />
              <span>ascending</span>
            </div>
            <div className="filter-input-div">
              <input type="radio" name="sortbyname" id defaultValue="desc" />
              <span>descending</span>
            </div>
          </div>
        </div>
   
  )
}

export default FilterProductsContainer
