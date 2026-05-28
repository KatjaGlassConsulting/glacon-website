import React from 'react';
import Link from 'next/link';
import { colors } from '@mui/material';

class FooterBottom extends React.Component {

    render() {
        return (
            <div className="footer footerposition">
                <div className="fluid padding_top_bottom_mini color_dark">
                    <div align="center">
                        <Link className="lightNeutralLink" href="/contact">Contact</Link>
                        &nbsp;|&nbsp;
                        <Link className="lightNeutralLink" href="/legal">Impressum / Legal Disclosure</Link>
                        &nbsp;|&nbsp;
                        <Link className="lightNeutralLink" href="/privacyPolicy">Datenschutz / Privacy Policy</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default FooterBottom;