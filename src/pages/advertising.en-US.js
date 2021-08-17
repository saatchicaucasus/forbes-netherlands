import React from 'react'
import * as PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import imageSrc from '../images/woman.jpg'
import IosPaper from '@meronex/icons/ios/IosPaper'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class Advertising extends React.Component {
  render() {
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <div className="container inline">
          <div className="mx-5 lg:px-14">
            <div id="advertising" className="w-full relative">
              <div id="top-image" className="relative">
                <img
                  src={imageSrc}
                  alt="Woman"
                  className="w-full h-auto select-none"
                />

                <div className="w-28 h-1 bg-white absolute bottom-36 left-1 md:left-10 lg:left-16 rounded-sm hidden md:block"></div>
                <h1 className="absolute z-10 bottom-16 left-5 md:left-10 lg:left-16 text-white text-xl font-bold sm:text-3xl md:text-4xl lg:text-6xl">
                  ADVERTISING
                </h1>
                <p className="absolute z-10 bottom-10 left-5 md:left-10 lg:left-16 text-white italic text-sm">
                  Align with success, innovation and excellence.
                </p>
              </div>
              <div className="w-full h-auto bg-black py-14">
                <div className="w-full pl-5 py-5">
                  <h2 className="w-full text-white md:text-4xl text-xl md:pl-5 lg:pl-10 pb-2">
                    Forbes Magazine, Netherlands Edition
                  </h2>
                  <div className="w-40 md:w-72 lg:w-76 bg-white h-2 rounded-sm md:ml-5 lg:ml-10"></div>
                </div>
                <div className="flex pl-5 pb-5 flex-wrap items-center">
                  <div className="w-full md:w-8/12">
                    <h3 className="text-white md:pl-5 lg:pl-10 pt-3 text-xl pr-5 md:text-3xl font-serif font-bold">
                      The Largest & Most Influential Audience
                    </h3>
                    <p className="text-white text-sm italic font-serif md:pl-5 lg:pl-10">
                      Tradition of Authoritative Business Journalism
                    </p>
                  </div>
                  <div className="w-full md:w-4/12 text-white mt-10 md:mt-0">
                    <h4>19k</h4>
                    <span>Adult Readership</span>
                  </div>
                </div>
              </div>
              <div id="focus" className="my-10 px-10 pl-5">
                <p className="my-3 md:pl-5 lg:pl-10 leading-8">
                  <strong>Forbes places a focus on the individual</strong> and
                  the ideas that have the power to change the world for the
                  better. For over 100 years, our agenda-setting cover stories
                  have offered business transparency, inspiration and surfaced
                  disruptive new directions. From Rockefeller to Bill Gates, the
                  Great Depression to the Great Recession, Forbes has always
                  provided our readers with critical insights.
                </p>
                <p className="my-3 md:pl-5 lg:pl-10 leading-8">
                  Forbes Magazine offers the Netherlands influential community
                  critical business insight. Each editorial department provides
                  readers with a fresh perspective and a provocative point of
                  view, keeping our audience of business leaders and affluent
                  consumers informed and engaged.
                </p>
              </div>
              <div id="list" className="bg-black py-10 px-10 pl-5 text-white">
                <p className="font-serif md:pl-5 lg:pl-10 my-4 text-xl">
                  FORBES Netherlands MAGAZINE{' '}
                  <strong className="text-3xl text-white font-serif">
                    ranks # 1
                  </strong>
                </p>
                <p className="md:pl-5 lg:pl-10 mb-3">
                  {' '}
                  in the business competitive set, reaching the most influential
                  and engaged audience of Netherlands Residents and Visitors
                </p>
                <ul className="md:pl-5 lg:pl-10 list-disc ml-4">
                  <li>Millenials</li>
                  <li>C-Suite & Top Management</li>
                  <li>Business Owners</li>
                  <li>IT Decision Makers</li>
                  <li>Business Decision Makers</li>
                  <li>UHNWIs</li>
                </ul>
              </div>
              <div
                id="campaign"
                className="bg-turmeric-600 flex flex-wrap py-14 px-10 pl-5"
              >
                <div
                  id="planCamp"
                  className="w-full text-center lg:w-3/12 md:pl-5 lg:pl-10"
                >
                  <h1 className="text-black font-bold text-4xl py-5">
                    Plain Your Campaign
                  </h1>
                  <div className="w-40 h-2 bg-black rounded-sm mx-auto"></div>
                </div>
                <div className="w-full lg:w-9/12 flex flex-col md:flex-row justify-around py-5 md:pl-5 lg:pl-10 ">
                  <div className="flex-col px-5 text-center md:text-left py-3">
                    <IosPaper className="text-white mx-auto md:ml-0 text-4xl"></IosPaper>
                    <a
                      className="text-black text-2xl hover:text-black"
                      href="#"
                    >
                      2021 Media Kit
                    </a>
                  </div>
                  <div className="flex-col px-5 text-center md:text-left py-3">
                    <IosPaper className="text-white mx-auto md:ml-0 text-4xl"></IosPaper>
                    <a
                      className="text-black text-2xl hover:text-black"
                      href="#"
                    >
                      2021 Digital Editorial Calendar
                    </a>
                  </div>
                  <div className="flex-col px-5 text-center md:text-left py-3">
                    <IosPaper className="text-white mx-auto md:ml-0 text-4xl"></IosPaper>
                    <a
                      className="text-black text-2xl hover:text-black"
                      href="#"
                    >
                      2021 Print Editorial Calendar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

Advertising.propTypes = propTypes

export default Advertising

export const pageQuery = graphql`
  query AdvertisingENQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`
