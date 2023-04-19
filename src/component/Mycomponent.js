import React, { useCallback, useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import image1 from "./image/1.jpg";
import image2 from "./image/2.jpg";
import image3 from "./image/3.jpg";
import image4 from "./image/4.jpg";

const Page = React.forwardRef((props, ref) => {
  console.log(ref);
  return (
    <div className="demoPage" ref={ref}>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});

function MyBook(props) {
  const [totalPage, setTotalPage] = useState(0);
  const flipBookRef = useRef(null);

  const handleNextPage = () => {
    console.log(flipBookRef.current);
    if (flipBookRef.current) {
      console.log(flipBookRef.current);
    }
  };
  useEffect(() => {
    if (flipBookRef.current) {
      console.log(flipBookRef.current.pageFlip());
      //   setTotalPage(flipBookRef.current.getPageFlip().getPageCount());
    }
  }, []);
  const onFlip = useCallback((e) => {
    console.log("Current page: " + e.data);
  }, []);

  const handleOnChangeState = (state) => {
    console.log("Current state:", state);
  };
  console.log(totalPage);
  return (
    <div>
      <HTMLFlipBook
        width={300}
        height={500}
        style={{ margin: "auto" }}
        onFlip={onFlip}
        // showCover={true}
        onChangeState={handleOnChangeState}
        // Use flipBookRef instead of flipBook
        ref={flipBookRef}
      >
        <Page number="1" key={1}>
          <img src={image1} alt="" width={300} height={500} />
        </Page>
        <Page number={2} key={2}>
          <img src={image2} alt="" width={300} height={500} />
        </Page>
        <Page number={3} key={3}>
          {" "}
          <img src={image3} alt="" width={300} height={500} />
        </Page>
        <Page number={4} key={4}>
          <img src={image4} alt="" width={300} height={500} />
        </Page>
      </HTMLFlipBook>
    </div>
  );
}

export default MyBook;
