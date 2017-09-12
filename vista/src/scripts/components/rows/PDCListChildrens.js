class PDCListChildrens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            countList: 0,
            loading: true,
            dev:false, 
        }
    }
    
    componentDidMount(){
        
        getCandidatos(this.props,  function (response) {
            if (response && response.data && response.data.d && response.data.d.length>0) {
                this.setState({rows: response.data.d, loading: false})
            }
            else if(response && response.data && response.data.d ){
                this.setState({dev:true,loading: false})
            }
        }.bind(this));

    }
    renderRowsCandidate() {
        
        var rows = this.state.rows;
        if (rows.length>0) {

            var renderList = [];
            var countList = 0;
            rows.map((candidate, index) => {
                countList++;
                    renderList.push(<PDCRowCandidate {...this.props} key={"candidatos" + index} candidate={candidate} />)
               
            })
            return (
                <div>
                    <div>
                        Total:{countList}
                    </div>
                    <div className="row table-header">
                        <div className="col-md-1 col-sm-1">
                            No. fam.
                        </div>
                        <div className="col-md-2 col-sm-3">
                            Socia
                        </div>
                        <div className="col-md-4 col-sm-3">
                            Niño
                        </div>
                        <div className="col-md-5 col-sm-5">
                           Encuesta
                        </div>
                    </div>
                    {renderList}</div>
            )
        }
        if(this.state.dev
        ){
            return (
                <div className="enMantenimento"> <img src="./src/img/construccion.jpg"/></div>
            )
        }
    }
    render() {
        if (this.state.loading == true) {
            return (
                <div className="spinner" key={"spinnerInstrumento_"}></div>
            )
        }
        return (
            <div>
                {this.renderRowsCandidate()}
              
            </div>
        )
    }
}