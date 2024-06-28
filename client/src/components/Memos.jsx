import { useState,useEffect } from "react";
import "./Memos.css"
const Memos=({state})=>{
    const [memos,setMemos]=useState([]);
    const {contract}=state;
    useEffect(()=>{
        const memosMessage = async()=>{
          const memos = await contract.getMemos();
          setMemos(memos)
          //console.log(memos)
        }
        contract && memosMessage()
    },[contract])
    return (
        <div >
          <h2 style={{ marginLeft:"650px", marginTop: "50px", color:"white", fontSize: "30px" }}>Messages</h2>           
                <table>
                <tbody >
          {memos.map((memo) => {
            return (
                    <tr>
                      <td 
                        style={{
                          backgroundColor: "white",
                          border: "1px solid white",
                          borderCollapse: "collapse",
                          padding: "7px",
                          width: "500px",
                          color:"black",
                         
                        }}
                      >
                        {memo.name}
                      </td>
                      <td 
                        style={{
                          backgroundColor: "white",
                          border: "1px solid white",
                          borderCollapse: "collapse",
                          padding: "7px",
                          width: "800px",
                          color:"black",
                        }}
                      >
                        {new Date(memo.timestamp * 1000).toLocaleString()}
                      </td>
                      <td  
                        style={{
                          backgroundColor: "white",
                          border: "1px solid white",
                          borderCollapse: "collapse",
                          padding: "7px",
                          width: "300px",
                          color:"black",
                        }}
                      >
                        {memo.message}
                      </td>
                      <td  className="container-fluid"
                        style={{
                          backgroundColor: "white",
                          border: "1px solid white",
                          borderCollapse: "collapse",
                          padding: "7px",
                          width: "400px",
                          color:"black",
                        }}
                      >
                        {memo.from}
                      </td>
                    </tr>
             
            );
          })}
               </tbody>
                </table>
        </div>
      );
}
export default Memos;