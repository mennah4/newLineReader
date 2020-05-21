import React from 'react';
import { render } from 'react-dom';
import { CsvToHtmlTable } from 'react-csv-to-table';
import ReactFileReader from 'react-file-reader';

class App extends React.Component {
  state={
    csvData: null
  };

  render(){
    return <div>
      <ReactFileReader 
        multipleFiles={false}
        fileTypes={[".csv"]} 
      handleFiles={this.handleFiles}>
        <button className='btn'>Upload</button>
      </ReactFileReader>
      
      {this.state.csvData  !== null?
        this.state.csvData.split("\\n").map(function(item, idx) {
              return (
                  <span key={idx}>
                      {item}
                      <br/>
                  </span>
               )
          }):"Please upload a file"}
          {/* {this.state.csvData  !== null?
        this.state.csvData :"Please upload a file"} */}
          
      {/* <CsvToHtmlTable
      data={this.state.csvData ?
        this.state.csvData.split("\\n").map(function(item, idx) {
              return (
                  <span key={idx}>
                      {item}
                      <br/>
                  </span>
               )
          }):"noDataYet"}
        // data={this.state.csvData || sampleData}
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
      /> */}
    </div>;
  } 
  handleFiles = files => {
    var reader = new FileReader();
    reader.onload =  (e) => {
      console.log(reader.result)
      this.setState({
        csvData: reader.result
      })
    }
    reader.readAsText(files[0]);
  }

}

render(<App />, document.getElementById('root'));
