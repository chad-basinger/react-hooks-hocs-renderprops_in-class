import React from 'react'
import '../style.css'
import Toggle from './Toggle';
import ToggleRp from './ToggleRp';

const RenderProps = props => {
  return (
    <section className="advanced-react-section">
      <h1>
        Render Props
        <a
          href="https://reactjs.org/docs/render-props.html"
          rel="noopener"
          target="__blank"
        >
          Docs
        </a>
      </h1>

      <ToggleRp render={(bool, toggleBool) => {
        return (
          <div>
            {bool ? 'hello friend!' : null}
            <button onClick={toggleBool}>CLICK!</button>
          </div>
        )
      }} />

      <Toggle>
        <h1 className>
          Hey you guys!
        </h1>
      </Toggle>

    </section>
  )
}
export default RenderProps