import { decrease, increase } from "../store/modules/counter";
import { connect, useSelector, useDispatch } from "react-redux";

const Button = ({ text, click }) => {
  return <button onClick={click}>{text}</button>;
};

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Total clicks : {counter}</h1>

      <Button text="+1" click={() => dispatch(increase())} />

      <Button text="-1" click={() => dispatch(decrease())} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    console.log("increase");
    dispatch(increase());
  },
  decrease: () => {
    console.log("decrease");
    dispatch(decrease());
  },
});

// connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
