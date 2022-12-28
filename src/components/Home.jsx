import React from 'react'

import NavItem from './Nav'
import Banner from './Banner/materialUi.banner'
import SvgWineBottle1 from './lotties/Svg'
import Categories from './Categories/Categories'

export default function Home() {
  return (
    <>
      <NavItem />
      <Banner />
      <Categories />
      {/* <SvgWineBottle1 /> */}
    </>
  )
}
