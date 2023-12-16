import React from 'react';

class Clac extends React.Component{
    constructor(){
        super()
        this.state={
            firstNumber:"",
            lastNumber:"",
            operator:"",
            value:"",
        }
    }

    firstNumber = (e)=>{
        this.setState({
        firstNumber:e.target.value

        })

    }
    lastNumber = (e)=>{
        this.setState({
            lastNumber:e.target.value

        })

    }
    opearatot = (e)=>{
        this.setState({
            operator:e.target.value

        })

    }
    submit = (e)=>{
        e.preventDefault()
        let operator = this.state.operator;
        if(operator==="-"){

            this.setState({
                value: parseInt(this.state.firstNumber)-parseInt(this.state.lastNumber)
    
            })

        }
        if(operator==="+"){
            this.setState({
                value: parseInt(this.state.firstNumber)+parseInt(this.state.lastNumber)
    
            })
        }
        if(operator==="*"){
            this.setState({
                value: parseInt(this.state.firstNumber)*parseInt(this.state.lastNumber)
    
            })
        }
        if(operator==="/"){
            this.setState({
                value: parseInt(this.state.firstNumber)/parseInt(this.state.lastNumber)
    
            })
        }


      

    }
    render(){
         return (
                <div style={{width:"200px" , display:"flex",flexDirection:"column"}}>
                    <div style={{width:"100%",backgroundColor:"gray",height:"50px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
                       {this.state.firstNumber}{this.state.operator}{this.state.lastNumber} {this.state.operator&&"="}{this.state.value}
                    </div>

                    <form style={{width:"100%"}}>

                        <input type="number"   onChange={this.firstNumber} style={{width:"100%"}}/><br/>
                        <select onChange={this.opearatot} >
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="*">*</option>
                            <option value="/">/</option>
                        </select><br/>
                        <input type="number" onChange={this.lastNumber}  style={{width:"100%"}}/><br/>

                        <button type='submit' onClick={this.submit} style={{width:"100%"}}>=</button>
                    </form>


                


                </div>
         )
}
}


export default Clac