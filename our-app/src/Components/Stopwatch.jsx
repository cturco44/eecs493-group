import { React } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './Stopwatch.css';

class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            is_done: false,
            interval: null,
        };
    }

    componentDidMount() {
        this.setState({
            time: 0, // in hundredths of a second
            is_done: false,
            interval: setInterval(this.incrTimer, 10),
        });
    }

    incrTimer(){
        const {time, interval, is_done} = this.state;

        if (!this.is_done) {
            this.setState({
                time: this.time + 1,
                interval: setInterval(this.incrTimer, 10),
            });
        } else {
            this.setState({
                time: this.time + 1,
            });
        }
    }

    endTimer() {
        const { is_done } = this.state;
        this.setState({
            is_done: true,
        });
        // add activity to redux store?
    }

    render() {
        const { time } = this.state;

        // 10 ms = 1 hundredth of a second


        return (
            <Stopwatch>
              <div time={time}/>
            </Stopwatch>
          );
    }
}

// const mapStateToProps = (state) => {
//   return {
//     // category: state.acts.category,
//     // time: state.acts.time,
//   };
// };

// export default connect(mapStateToProps)(Stopwatch);
export default (Stopwatch);
