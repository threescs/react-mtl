import React, { Component } from 'react';

/**
 * 演出海报
 *
 * @export
 * @class PosterImg
 * @extends {Component}
 */

export class PosterImg extends Component {
    render() {
        return (
            <div className="poster-img" style={{ backgroundImage: 'url(' + this.props.url + ')' }}></div>
        )
    }
} 