import React, { Component } from 'react';
import Header from './Header'
import Footer from './footer'
import './style.css';
import { black } from 'material-ui/styles/colors';
// import './index.html'


export default class Audio extends Component {
    constructor(props){
        super(props);
        this.state={
            targetInput:""
        }
    }

    // componentDidMount(){
    //     this.state.targetInput.focus();
    // }

    render() {
        this.state.targetInput = document.getElementById("songs");
        
        // targetInput.focus();
        //    results = document.getElementById("autocomplete-results"),
        //   songsList= ['aaaa','ccccc','aasss','fffff','ddddd','ssss','ttttt'];
        return (
            <div class="container">
                <form action=" ">
                    <label for="songs">please enter the songs name</label>
                    <input type="text" id="songs" name="songs" placeholder="Type here" />
                    <ul id="autocomplete-results"></ul>

                </form>
                
             {/* <p>aaaaa</p> */}



                <Header />
                <div style={{ width: 300,
    position: "fixed",
    right: 0,
    top: 50,
    height: 10,
    // backgroundColor: black,
    borderLeft:1,
    backgroundColor: 'transparent'
    
}} >
                <button class="button"
                // onClick={()=>
                //    this.setState({
                   
                //     count:this.state.count+1,
                //     index:this.state.count%3
                   
                //    }
                //    )
                   
                // }
                >I Love You</button><br />
                <button class="button"
                // onClick={()=>
                //    this.setState({
                   
                //     count:this.state.count+1,
                //     index:this.state.count%3
                   
                //    }
                //    )
                   
                // }
                >Fadded.mp3</button><br />
                <button 
                // onClick={()=>
                //    this.setState({
                   
                //     count:this.state.count+1,
                //     index:this.state.count%3
                   
                //    }
                //    )
                   
                // }
                >In The End</button>
                <br />
                <button class="button"
                // onClick={()=>
                //    this.setState({
                   
                //     count:this.state.count+1,
                //     index:this.state.count%3
                   
                //    }
                //    )
                   
                // }
                >Despacito</button><br />
                <button class="button"
                // onClick={()=>
                //    this.setState({
                   
                //     count:this.state.count+1,
                //     index:this.state.count%3
                   
                //    }
                //    )
                   
                // }
                >Closer</button>
                <button class="button"
                // onClick={()=>
                //    this.setState({
                   
                //     count:this.state.count+1,
                //     index:this.state.count%3
                   
                //    }
                //    )
                   
                // }
                 

                >Love Me Like You Do</button>
                </div>
               
                
                <Footer />
                
            </div>
        );
    }
}



