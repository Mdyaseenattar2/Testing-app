import React, { useEffect, useState } from "react";
import config from "../utils/config";

export default function Sidemenu() {
  const [currentArray, setCurrentArray] = useState(config);
  useEffect(() => {
    setCurrentArray(config);
  }, []);

  const testing = (ele, index1, index2) => {
    let aaa = ele.nodes.filter((elem) => elem.checked !== true) < 1;
    let temparray = [...currentArray];
    let b = {
      ...ele,
      checked: aaa,
    };
    temparray[index1].nodes[index2] = b;
    setCurrentArray(temparray);
  };
  const testing2 = (ele, index1) => {
    let aaa = ele.nodes.filter((elem) => elem.checked !== true) < 1;
    let temparray = [...currentArray];
    let b = {
      ...ele,
      checked: aaa,
    };
    temparray[index1] = b;
    console.log(temparray, currentArray, b, aaa);
    setCurrentArray(temparray);
  };

  return (
    <>
      <div>
        {currentArray.map((item, index1) => {
          return (
            <div>
              <div
                className="bg-primary"
                style={{ padding: "10px", position: "relative" }}
              >
                <input
                  key={item.label}
                  type="checkbox"
                  value={item.checked || false}
                  name={item.key}
                  checked={
                    !!item.checked ||
                    item.nodes.filter((a) => a.checked !== true) < 1
                  }
                  onChange={(e) => {
                    let newArray = [...currentArray];
                    let a = { ...item, checked: e.target.checked };
                    newArray[index1] = a;
                    item.nodes.map((element) => {
                      element.checked = e.target.checked;
                      element.nodes.map((el) => {
                        return (el.checked = e.target.checked);
                      });
                    });
                    setCurrentArray(newArray);
                  }}
                />
                <span
                  className="mx-2 "
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    let newArray = [...currentArray];
                    let a = {
                      ...item,
                      drawerOpen: item.drawerOpen ? !item.drawerOpen : true,
                    };
                    newArray[index1] = a;
                    setCurrentArray(newArray);
                    //setAccordianState(!accordianState);
                  }}
                >
                  {item.label}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className={
                    item.drawerOpen ? "bi bi-chevron-up" : "bi bi-chevron-down"
                  }
                  viewBox="0 0 16 16"
                  style={{ position: "absolute", right: "10px" }}
                >
                  {item.drawerOpen ? (
                    <path
                      fill-rule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  ) : (
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  )}
                </svg>
              </div>
              <div>
                {item.drawerOpen &&
                  item.nodes &&
                  item.nodes.map((child, index2) => {
                    return (
                      <div
                        style={{
                          marginLeft: "10px",
                          padding: "10px",
                          position: "relative",
                        }}
                      >
                        <input
                          key={child.label}
                          type="checkbox"
                          value={child.checked || false}
                          name={child.key}
                          checked={
                            !!child.checked ||
                            child.nodes.filter((a) => a.checked !== true) < 1
                          }
                          onChange={(e) => {
                            let newArray = [...currentArray];
                            let a = {
                              ...child,
                              checked: e.target.checked,
                            };
                            child.nodes.map((element) => {
                              return (element.checked = e.target.checked);
                            });
                            testing2(item, index1);
                            newArray[index1].nodes[index2] = a;
                            setCurrentArray(newArray);
                          }}
                        />

                        <span
                          className="mx-2 "
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            let newArray = [...currentArray];
                            let a = {
                              ...child,
                              drawerOpen: child.drawerOpen
                                ? !child.drawerOpen
                                : true,
                            };
                            newArray[index1].nodes[index2] = a;
                            setCurrentArray(newArray);
                          }}
                        >
                          {child.label}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className={
                            item.drawerOpen
                              ? "bi bi-chevron-up"
                              : "bi bi-chevron-down"
                          }
                          viewBox="0 0 16 16"
                          style={{ position: "absolute", right: "10px" }}
                        >
                          {child.drawerOpen ? (
                            <path
                              fill-rule="evenodd"
                              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                            />
                          ) : (
                            <path
                              fill-rule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                          )}
                        </svg>
                        <div>
                          {child.drawerOpen &&
                            child.nodes &&
                            child.nodes.map((a, index3) => {
                              return (
                                <div
                                  style={{
                                    marginLeft: "10px",
                                    padding: "10px",
                                  }}
                                >
                                  <input
                                    key={a.label}
                                    type="checkbox"
                                    value={a.checked || false}
                                    name={a.key}
                                    checked={a.checked}
                                    onChange={(e) => {
                                      let newArray = [...currentArray];
                                      let array = {
                                        ...a,
                                        checked: e.target.checked,
                                      };
                                      newArray[index1].nodes[index2].nodes[
                                        index3
                                      ] = array;
                                      testing(child, index1, index2);
                                      setCurrentArray(newArray);
                                    }}
                                  />
                                  <span className="mx-2">{a.label}</span>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </>

    //using bootstrap
    // <>
    //   {configrations.map((item, index) => {
    //     return (
    //       <Accordion defaultActiveKey="0">
    //         <Accordion.Item eventKey="0" style={{ border: "none" }}>
    //           <Accordion.Header>
    //             <input
    //               key={item.label}
    //               type="checkbox"
    //               value={item.key}
    //               name={item.key}
    //               //checked={}
    //               onChange={(e) => changeSelection(e)}
    //             />
    //             <span className="mx-2">{item.label}</span>
    //           </Accordion.Header>
    //           <Accordion.Body
    //             //className="bg-primary"
    //             style={{ color: "white", background: "#333395" }}
    //           >
    //             <div>
    //               {item.nodes &&
    //                 item.nodes.map((i, index) => {
    //                   return (
    //                     <Accordion defaultActiveKey="0">
    //                       <Accordion.Item
    //                         eventKey="0"
    //                         style={{ border: "none" }}
    //                       >
    //                         <Accordion.Header>
    //                           <input
    //                             key={i.label}
    //                             type="checkbox"
    //                             value={i.key}
    //                             name={i.key}
    //                             //checked={}
    //                             onChange={(e) => changeSelection(e)}
    //                           />
    //                           <span className="mx-2">{i.label}</span>
    //                         </Accordion.Header>
    //                         <Accordion.Body
    //                           style={{ color: "white", background: "#333395" }}
    //                         >
    //                           <div>
    //                             {i.nodes &&
    //                               i.nodes.map((a, index) => {
    //                                 return (
    //                                   <Accordion defaultActiveKey="0">
    //                                     <Accordion.Item
    //                                       eventKey="0"
    //                                       style={{
    //                                         border: "none",
    //                                       }}
    //                                     >
    //                                       <Accordion.Body
    //                                         style={{
    //                                           color: "whie",
    //                                           background: "#333395",
    //                                         }}
    //                                       >
    //                                         <input
    //                                           key={a.label}
    //                                           type="checkbox"
    //                                           value={a.key}
    //                                           name={a.key}
    //                                           //checked={}
    //                                           onChange={(e) =>
    //                                             changeSelection(e)
    //                                           }
    //                                         />
    //                                         <span
    //                                           className="mx-2"
    //                                           style={{ color: "white" }}
    //                                         >
    //                                           {a.label}
    //                                         </span>
    //                                       </Accordion.Body>
    //                                     </Accordion.Item>
    //                                   </Accordion>
    //                                 );
    //                               })}
    //                           </div>
    //                         </Accordion.Body>
    //                       </Accordion.Item>
    //                     </Accordion>
    //                   );
    //                 })}
    //             </div>
    //           </Accordion.Body>
    //         </Accordion.Item>
    //       </Accordion>
    //     );
    //   })}
    // </>
  );
}
