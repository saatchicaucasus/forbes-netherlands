import React from 'react'
import * as PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class Contact extends React.Component {
  render() {
    return (
      <Layout data={this.props.data} location={this.props.location}>
        <section className="flex flex-col justify-center items-center bg-forbes-site-white">
          <div className="max-w-screen-md lg:px-10 mt-10 mx-4">
            <div className="flex flex-col md:flex-row">
              <div className="mx-5">
                <h2 className="text-3xl tracking-wide font-serif font-bold">
                  Our Offices
                </h2>
                <hr className="my-5 bg-gray-200" />
                <h3 className="text-turmeric-500 text-2xl font-bold font-serif my-3">
                  Forbes Monaco Headquarters
                </h3>
                <ul className="text-gray-500 my-3">
                  <li>Le Montaigne A</li>
                  <li>2 avenue de la Madone</li>
                  <li>1st floor</li>
                  <li>MC 98000</li>
                  <li>Principality of Monaco</li>
                </ul>
                <ul className="text-gray-500 my-3">
                  <li>
                    <a
                      className="text-turmeric-500 hover:text-turmeric-700"
                      href="#"
                    >
                      (+ 33) 6 8086 3250
                    </a>
                  </li>
                  <li>
                    CEO{' '}
                    <a
                      className="text-turmeric-500 hover:text-turmeric-700"
                      href="#"
                    >
                      ceo@forbes-monaco.com
                    </a>
                  </li>
                  <li>
                    Administration{' '}
                    <a
                      className="text-turmeric-500 hover:text-turmeric-700"
                      href="#"
                    >
                      admin@forbes-monaco.com
                    </a>
                  </li>
                  <li>
                    Advertising{' '}
                    <a
                      className="text-turmeric-500 hover:text-turmeric-700"
                      href="#"
                    >
                      advert@forbes-monaco.com
                    </a>
                  </li>
                </ul>
                <hr className="my-5 bg-gray-200" />
                <h2 className="text-3xl tracking-wide	 font-serif font-bold mb-4">
                  Media Sales
                </h2>
                <h3 className="text-black text-lg font-bold">
                  Advertising Sales Executives
                </h3>

                <p>
                  <a
                    className="text-turmeric-500 hover:text-turmeric-700"
                    href="#"
                  >
                    advert@forbes-monaco.com
                  </a>
                </p>
                <p>
                  <a
                    className="text-turmeric-500 hover:text-turmeric-700"
                    href="#"
                  >
                    (+33) 6 5089 1368
                  </a>
                </p>
                <p>
                  <a
                    className="text-turmeric-500 hover:text-turmeric-700"
                    href="#"
                  >
                    (+377) 6 8086 3250
                  </a>
                </p>
                <hr className="my-5 bg-gray-200" />

                <h2 className="text-3xl tracking-wide	 font-serif font-bold my-5">
                  Editorial
                </h2>
                <h3 className="font-bold">Contact a writer directly by:</h3>
                <ul className="list-disc text-gray-500 mb-5">
                  <li className="ml-5">
                    Using the contact button on a writer's article
                  </li>
                  <li className="ml-5">
                    Leaving a comment on a writer's article
                  </li>
                  <li className="ml-5">
                    Reaching out to a writer via their social accounts
                  </li>
                </ul>

                <p className="text-gray-500">
                  Send corrections to{' '}
                  <a
                    href="#"
                    className="text-turmeric-500 hover:text-turmeric-700"
                  >
                    admin@forbes-monaco.com
                  </a>{' '}
                </p>
                <p className="text-gray-500">
                  For general editorial feedback contact{' '}
                  <a
                    href="#"
                    className="text-turmeric-500 hover:text-turmeric-700"
                  >
                    readers@forbes-monaco.com
                  </a>{' '}
                </p>
                <p className="text-gray-500">
                  Submit story pitches to{' '}
                  <a
                    href="#"
                    className="text-turmeric-500 hover:text-turmeric-700"
                  >
                    readers@forbes-monaco.com
                  </a>{' '}
                </p>
                <p className="text-gray-500">
                  If you need help with our site, including technical issues,
                  please contact{' '}
                  <a
                    href="#"
                    className="text-turmeric-500 hover:text-turmeric-700"
                  >
                    admin@forbes-monaco.com
                  </a>
                </p>

                <hr className="my-5 bg-gray-200" />

                <h2 className="text-3xl tracking-wide	 font-serif font-bold mb-5">
                  Press Inquiries
                </h2>

                <p className="text-gray-500">
                  Email{' '}
                  <a
                    className="text-turmeric-500 hover:text-turmeric-700"
                    href="#"
                  >
                    admin@forbes-monaco.com
                  </a>
                </p>

                <hr className="my-5 bg-gray-200" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

Contact.propTypes = propTypes

export default Contact

export const pageQuery = graphql`
  query ContactENQuery {
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
