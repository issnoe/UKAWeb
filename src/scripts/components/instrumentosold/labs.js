    // const styles = {
    //     fontFamily: 'sans-serif',
    //     textAlign: 'center'
    // };

    // class Component extends React.Component {
    
    //     state = {
    //         index:this.props.index,
    //         value: 0,
    //         list: (this.props.list == undefined)
    //             ? []
    //             : this.props.list,
    //         name: this.props.name,
    //         render: true
    //     }
    //     addTolist = () => {
    //         var list = this.state.list;
    //         var id = Math.floor((Math.random() * 10) + 1);
    //         var index = this.state.name + id
    //         list.push({
    //             name: index.toString(),
    //             list: []
    //         })
    //         this.setState({
    //             list: list,
    //             render: true
    //         }, () => {
    //                 this
    //                 .props
    //                 .handleChildren(this.state)
    //         })
    //     }

    //     update = () => {
    //         this.setState({
    //             value: Math.random(),
    //             render: true
    //         })
    //     }

    //     componentWillReceiveProps(nextProps) {
    //     }

    //     shouldComponentUpdate() {
    //         if (this.state.render === false) 
    //             return false;
    //         return true;
    //     }
    //     handleInput = (e) => {
    //         var valor = e.target.value;
    //         this.setState({
    //             name: valor,
    //             render: true
    //         }, () => {

    //             this
    //                 .props
    //                 .handleChildren(this.state)
    //         })
    //     }
    //     handleChildren = (child) => {

    //         var list = this.state.list;
    //         var index = list.findIndex(function (element, i, array) {
    //             return (element.index === child.index)
    //         });
    //         if (index) {
    //             list[index] = child
    //             this.setState({
    //                 list: list,
    //                 name:child.name
    //             }, () => {

    //                 this
    //                     .props
    //                     .handleChildren(this.state)
    //             })
    //         }

    //     }
    //     renderList() {
    //         var listChildrens = []
    //         if (this.state.list && this.state.index!="main") {
    //             this
    //                 .state
    //                 .list
    //                 .map((index,i) => {
    //                     listChildrens.push(<Component
    //                         key={i}
    //                         name={index.name}
    //                         list={index.list}
    //                         index={i}
    //                         handleChildren={this.handleChildren}/>)
    //                 })
    //         }

    //         return listChildrens;

    //     }
    //     render() {

    //         return (
    //             <div
    //                 style={{
    //                 border: '1px solid',
    //                 padding: 10
    //             }}>
    //                 <button onClick={this.addTolist}>Add item</button>
    //                 {/* <p>Name: {this.state.name}, internal state: {this.state.value}, random: {Math.random()}</p> */}
    //                 <input type="text" onChange={this.handleInput} value={this.state.name}/>
    //                 <div>
    //                     {/* <button >Add child</button> */}
    //                     {/* <button onClick={this.update}>update self</button> */}
    //                 </div>
    //                 {this.renderList()}
    //                 {this.props.children}
    //             </div>
    //         )
    //     }
    // }

    // class App2 extends React.Component {
    //     state = {
    //         list: [ ],
    //         name: ""
    //     }
    //     handleChildren = (child) => {
            
    //         var list = this.state.list;
    //         var index = list.findIndex(function (element, i, array) {
    //             return (element.index === child.index)
    //         });
    //         if(index) {
    //             list[index] = child
    //             this.setState({
    //                 list: list,
    //                 name:child.name
    //             }, () => {
    //                 var jsondata = JSON.stringify(this.state)
    //                 this.setState({jsondata })
    //             })

    //         } 

    //     }
    //     renderList() {
    //         var listChildrens = []
    //         this
    //             .state
    //             .list
    //             .map((index,i) => {
                    
    //                 listChildrens.push(<Component
    //                     key={i}
    //                     index={i}
    //                     name={index.name}
    //                     list={index.list}
    //                     handleChildren={this.handleChildren}/>)
    //             })
    //         return listChildrens;

    //     }
        
    //     render() {

    //         return (
    //             <div>

    //                 <div>
    //                     <Component key={"main"}
    //                     index={"main"}
    //                     list={this.state.list}
    //                     name={this.state.name} 
    //                     handleChildren={this.handleChildren}>
    //                     {this.renderList()}
    //                     </Component>

    //                 </div>
    //                 {this.state.jsondata}
    //             </div>
    //         );
    //     }
    // }
    // ReactDOM.render(
    //     <App2/>, document.getElementById('root'));
