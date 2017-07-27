class Childrens extends React.Component {
    constructor(props) {
        super(props);
        getChildrends("", function(response){
            debugger;
            this;
        }.bind(this));
    }
   

   
    render() {
       

        return (
            <div>
                hola mundo estoy en el componente
            </div>
        )

    }
}