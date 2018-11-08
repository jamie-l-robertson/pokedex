import React, { Component } from "react";
import { Sprite } from "../../sprite";
import { PillList } from "../../pillList";
import { Egg } from "../egg";
import { DetailHeaderWrapper } from "./styles";

class DetailHeader extends Component {
  state = {
    revealShiny: false
  };

  handleShinyClick() {
    this.setState({
      revealShiny: !this.state.revealShiny
    });
  }

  // Reset shiny state if navigating to next/previous pokemon
  componentWillReceiveProps() {
    this.setState({ revealShiny: false });
  }

  render() {
    const {
      name,
      pokeId,
      shinyAvailable,
      types,
      eggDistance,
      rarity
    } = this.props.data;

    return (
      <React.Fragment>
        <DetailHeaderWrapper>
          <Sprite
            id={pokeId}
            alt="Normal variant"
            revealShiny={this.state.revealShiny}
          />
          <div className="content">
            <h1>
              {name}
              {shinyAvailable ? (
                <span
                  className="icon"
                  role="img"
                  title="Shiny available"
                  aria-label="Shiny available"
                  onClick={() => this.handleShinyClick()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <path
                      fill="#F4DF19"
                      d="M24.5 0l7.1 16.4 16.2 7.5-16.3 7.4-7 16.5-7.4-16.5-16-7.4 16.1-7.6zM42.2 52.2l7.2 16.4 16.2 7.5-16.3 7.4-7.1 16.5-7.3-16.5-16-7.4 16-7.6zM74.5 16.7l7.1 16.4 16.2 7.5L81.5 48l-7 16.4L67.1 48l-16-7.4L67.2 33z"
                    />
                  </svg>
                </span>
              ) : null}
            </h1>
            {types ? <PillList data={types} /> : null}
            {rarity ? (
              <span className="rarity">{rarity.split("_").join(" ")}</span>
            ) : null}
            {eggDistance ? (
              <span
                className="icon icon--large icon--egg"
                role="img"
                aria-label={`Hatches from ${eggDistance}km egg`}
              >
                <Egg distance={eggDistance} />
              </span>
            ) : null}
            <span className="identifier">#{pokeId}</span>
          </div>
        </DetailHeaderWrapper>
      </React.Fragment>
    );
  }
}

export default DetailHeader;
