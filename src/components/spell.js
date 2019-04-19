import React, { Component } from 'react';

export default class Spell extends Component {
    state = {
        'message': '',
        'voices': [{ name: 999 }],
        'dict': ['harmonium', 'umbrella', 'basketball'],
        'selected': -1,
        'player_msg': ''
    };
    synth = window.speechSynthesis;

    addMessage = (event) => {
        console.log(event.target.value);
        this.setState({
            'message': event.target.value
        });
    };

    speakOut = (messsge = '') => {
        this.synth.cancel();
        if (!messsge)
            messsge = this.state.message;
        var msg = new SpeechSynthesisUtterance(messsge);
        this.synth.speak(msg);
    };

    changeVoice = () => {
        var voices = this.synth.getVoices();
        // console.table(voices);
        this.setState({
            'voices': voices
        });
        // console.table(this.state.voices);
    }

    play = () => {
        var i = Math.floor(Math.random() * 3);
        this.speakOut(this.state.dict[i]);
        this.setState({
            'selected': i
        });
    }

    checkMessage = () => {
        if (this.state.dict[this.state.selected] === this.state.message) {
            var msg = 'Well Done';
        } else {
            var msg = 'Wrong Answer. Try Again';
        }
        this.speakOut(msg);
        this.setState({
            'player_msg': msg
        });
    }

    getHint = () => {

    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="card">

                        <div className="card-action">
                            <button onClick={this.play} className="play btn blue darken-2 waves-effect" type="submit" name="action">Play
                    <i className="material-icons left">play_arrow</i>
                            </button>
                        </div>

                        <div className="card-content">
                            <textarea onChange={this.addMessage} id="input_output" className="materialize-textarea" data-length="120"></textarea>
                            <label htmlFor="textarea2">Write Your Spell</label>

                            <p>{this.state.player_msg}</p>
                        </div>

                        <br />

                        <div className="card-action">
                            <button onClick={this.checkMessage} className="play btn blue darken-2 waves-effect" type="submit" name="action">Enter
                    <i className="material-icons right"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        );
    }

}