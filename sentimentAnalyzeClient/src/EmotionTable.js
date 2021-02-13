import React from 'react';
import './bootstrap.min.css';
import { object } from 'prop-types';

class EmotionTable extends React.Component {
    render() {
      return (  
        <div>
          {/*You can remove this line and the line below. */}
          {JSON.stringify(this.props.emotions)}
          <table className="table table-bordered">
            <tbody>
            {                
                Object.values(this.props.emotions).map((value, ix) => 
                    <tr>
                        <td style={{color: "black",border: "1px solid black"}}> {Object.getOwnPropertyNames(this.props.emotions)[ix]}</td>
                        <td style={{color: "black",border: "1px solid black"}}> {value}</td>
                    </tr>
                    )                    
                    //Write code to use the .map method that you worked on in the Hands-on React lab to extract the emotions
                }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;
