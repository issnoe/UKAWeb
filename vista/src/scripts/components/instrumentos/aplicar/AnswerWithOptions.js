class AnswerWithOptions extends React.Component {
    
    render() {
      
        return (
            <div >

                <div className="col-md-8 col-sm-8">

                    <div className="form-group">
                        <label className="label"> {parseInt(this.props.index) + 1+")"}</label>
                        <input
                            type="checkbox"
                            onClick={this.props.selectOption}
                            value={this.props.option}
                            name={this.props.index}
                             
                           
                           />
                           {this.props.option}
                    </div>
                </div>
                <div className="col-md-4 col-sm-4">
                    <div className="form-group">
                       
                        {this.props.condition}
                      
                    </div>
                </div>
            </div>

        )
    }
}
