import React, { Component } from 'react';
import Sidenav from './sidenav/Sidenav'
import Topnav from './topnav/Topnav';
// import { Container, Row, Col } from 'react-grid-system';
import FlexContainer from '../components/layout/FlexContainer';
import FlexContent from '../components/layout/FlexContent';
import { Row } from 'react-grid-system';
import TopnavFlex from './topnav/TopnavFlex';
import LayoutContainer from '../components/containers/LayoutContainer';
import Content from './content/Content';
import Paragraph from '../components/typography/Paragraph';
import ContentContainer from './content/ContentContainer';
import Footer from '../components/footer/footer';
import FooterFlex from './footer/FooterFlex';

export default class Layout extends Component {
    render() {
        return (
            <LayoutContainer>
                <TopnavFlex />
                <FlexContainer>
                    <Sidenav />
                    <ContentContainer />
                    {/* <Content>
                        <Paragraph style={{ opacity: 0.8 }}>Hi</Paragraph>
                        <Paragraph style={{ opacity: 0.8 }}>This is Sample Content</Paragraph>
                    </Content> */}

                </FlexContainer>
                <FooterFlex />
            </LayoutContainer >

        )
    }
}
