import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isDesktop,
} from "react-device-detect";

export default function Panel({ cities, selectCity, cityRef }) {
  //set window size to state
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  // window width breakpoint
  const breakpoint = 700;

  function _onclickCiti(id, e) {
    selectCity(id, e);
  }

  const classnameTest = isBrowser ? "browser" : "mobile";

  if (isDesktop) {
    return (
      <div className="panel_wrap">
        <h2>Walking Tour {classnameTest}</h2>
        <div className="city_list">
          <p>Scroll down for more cities</p>
          <div>
            <ul>
              {cities.map(({ name, url, id }) => (
                <li ref={cityRef} key={id} onClick={(e) => _onclickCiti(id, e)}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (isMobile) {
    return (
      <section className="mobile_panel edit">
        <div className="city_list">
          <p>Scroll down for more cities {classnameTest}</p>
          <div>
            <ul>
              {cities.map(({ name, url, id }) => (
                <li ref={cityRef} key={id} onClick={(e) => _onclickCiti(id, e)}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
