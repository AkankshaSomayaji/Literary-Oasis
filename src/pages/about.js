import { Table, Image } from 'react-bootstrap';
import NavBar from '../components/navbar';
import * as constants from './constants';
import girlInChairImage from '../images/girl-chair-laptop.png';
import girlUnicornImage from '../images/girl-and-unicorn-nobg.png';
import girlCatImage from '../images/girl-and-cat-nobg.png';

function About() {
    return (
        <div className="about-container">
            <NavBar/>
            <div style={{backgroundColor:"#eae5df", marginTop:"60px"}}>
                <Table style={{backgroundColor:"#eae5df"}} bordered>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td rowSpan={5}>
                                <Image
                                    src={girlInChairImage}
                                    alt="Girl In Chair Image"
                                    width={400}
                                    height={300}
                                />
                            </td>
                            <td>{constants.about1}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>{constants.about2}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>{constants.about3}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>{constants.about4}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>{constants.about5}</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>{constants.about6}</td>
                            <td rowSpan={5}>
                                <Image
                                    src={girlUnicornImage}
                                    alt="Girl And Unicorn Image"
                                    width={400}
                                    height={300}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>{constants.about7}</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>{constants.about8}</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>{constants.about9}</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>{constants.about10}</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td rowSpan={5}>
                                <Image
                                    src={girlCatImage}
                                    alt="Girl And Cat Image"
                                    width={400}
                                    height={300}
                                />
                            </td>
                            <td>{constants.about11}</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>{constants.about12}</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>{constants.about13}</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>{constants.about14}</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>{constants.about15}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
  
export default About;