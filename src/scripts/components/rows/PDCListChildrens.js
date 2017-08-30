class PDCListChildrens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childrends: [],
            countList: 0,
            loading: true
        }
    }
    componentDidMount(){
        debugger
        getChildrends("",  function (response) {
            if (response && response.data && response.data.d && response.data.d.length>0) {
                this.setState({childrends: response.data.d, loading: false})
            }
        }.bind(this));

    }
    renderChildrendsCandidateNAR() {
        var childrends = this.state.childrends;
        if (childrends.length>0) {
            var renderList = [];
            var countList = 0;
            childrends.map((child, index) => {
                var lastSomatometria = child.listaSomatometrias[0];
                    countList++;
                    var nar = {}
                    nar.lastSomatometriaDate = lastSomatometria.date;
                    nar.dxPE = lastSomatometria.dxPE;
                    nar.lastPeso = lastSomatometria.peso;
                    var almostlast = child.listaSomatometrias[1]
                    if(almostlast){
                        nar.difPeso = Math.abs(lastSomatometria.peso - (almostlast.peso))
                    }else{
                        nar.difPeso =0;
                    }
                    renderList.push(<PDCRowChildren {...this.props} key={"chillistnar" + index} child={child} nar={nar}/>)
               
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
    }
    render() {
        if (this.state.loading == true) {
            return (
                <div className="spinner" key={"spinnerInstrumento_"}></div>
            )
        }
        return (
            <div>
                {this.renderChildrendsCandidateNAR()}
            </div>
        )
    }
}