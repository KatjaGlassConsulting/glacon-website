import React from 'react';
import { Container, Box } from "@mui/material";
import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/Layout'

class ScreenLegal extends React.Component {

    render() {
        return (
            <Layout>
                <Head>
                    <title>Imprint</title>
                    <meta charSet="utf-8" />
                    <meta property="title" content="Impressum / Imprint" key="title" />
                </Head>
                <div className="bodycontent">
                    <Container vertical>
                        <Box textAlign="center">                        
                            <h1 className="article-h1" id="top">Impressum</h1>
                            <Link href="/legal#impressum_eng">Legal Notification (English see below)</Link>
                        </Box>
                        
                        <hr className="article-hr" />

                        <h2>Impressum / Imprint</h2>
                        <p>Katja Glass Consulting<br />
                        Katja Gla&#223;<br />
                        Biesdorfer Weg 17a<br />
                        12683 Berlin<br />
                        Germany<br />
                        Tel: 0049 30 403633 93<br />
                            <a href="mailto:info@glacon.eu" className="text-info">info@glacon.eu</a><br />
                            <br />
                        </p>   
                        <meta name="generator" content="Impressum-Generator der Kanzlei Hensche Rechtsanwälte" />
                        <h2>Disclaimer - rechtliche Hinweise</h2>
                        <p><strong>Auskunfts- und Widerrufsrecht</strong></p>
                        <p>Sie haben jederzeit das Recht, sich unentgeltlich und unverz&#252;glich &#252;ber die zu Ihrer Person erhobenen Daten
                        zu erkundigen. Ebenfalls k&#246;nnen Sie Ihre Zustimmung zur Verwendung Ihrer angegebenen pers&#246;nlichen Daten mit
                        Wirkung f&#252;r die Zukunft widerrufen. Hierf&#252;r wenden Sie sich bitte an den im Impressum angegebenen
                        Diensteanbieter.</p>
                        <p><strong>Disclaimer (Haftungsausschluss)</strong></p>
                        <p><strong>1. Haftung f&#252;r Inhalte</strong></p>
                        <p>Als Diensteanbieter sind wir gem&#228;&#223; &#167; 7 Abs. 1 TMG f&#252;r eigene Inhalte auf diesen Seiten nach den
                        allgemeinen Gesetzen verantwortlich. Nach &#167;&#167; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                        verpflichtet, &#252;bermittelte oder gespeicherte fremde Informationen zu &#252;berwachen oder nach Umst&#228;nden zu
                        forschen, die auf eine rechtswidrige T&#228;tigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung
                        von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber&#252;hrt. Eine diesbez&#252;gliche Haftung ist
                        jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&#246;glich. Bei Bekanntwerden von
                        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
                        <p><strong>2. Haftung f&#252;r Links</strong></p>
                        <p>Diese Website enth&#228;lt Links zu externen Webseiten Dritter, auf deren Inhalte kein Einfluss genommen werden kann.
                        Deshalb kann f&#252;r diese fremden Inhalte auch keine Gew&#228;hr &#252;bernommen werden. F&#252;r die Inhalte der
                        verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
                        zum Zeitpunkt der Verlinkung auf m&#246;gliche Rechtsverst&#246;&#223;e &#252;berpr&#252;ft. Rechtswidrige Inhalte waren
                        zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                        konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden derartige
                        Links umgehend von dieser Website auf die rechtsverletzende Site entfernen.</p>
                        <p><strong>3. Urheberrecht</strong></p>
                        <p>Die durch die Diensteanbieter, deren Mitarbeiter und beauftragte Dritte erstellten Inhalte und Werke auf diesen Seiten
                        unterliegen dem deutschen Urheberrecht. Die Vervielf&#228;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                        au&#223;erhalb der Grenzen des Urheberrechtes bed&#252;rfen der vorherigen schriftlichen Zustimmung des jeweiligen Autors
                        bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&#252;r den privaten, nicht kommerziellen Gebrauch
                        gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
                        beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
                        Rechtsverletzungen werden derartige Inhalte umgehend entfernen.</p>
                        <br></br>
                        <p>Dieses Impressum wurde mit Hilfe
                        des <a className="text-info" target="_blank" rel="noopener noreferrer" href="http://www.hensche.de/impressum-generator.html">Impressum-Generators </a>
                        von <a className="text-info" target="_blank" rel="noopener noreferrer" href="http://www.hensche.de/Rechtsanwalt_Arbeitsrecht_Berlin.html">HENSCHE Rechtsanw&auml;lte</a> erstellt.</p>
                        <hr></hr>
                        <h1 className="article-h1" id="impressum_eng">Legal Notification (English Translation)</h1>
                        <p><strong>Right of information and cancellation</strong></p>

                        <p>You have the right at any time to request your personal information related data
                        collected with free of charge and without delay. You may also revoke your consent to the
                        use of your personal information with effect for the future. For this please contact the
                        service provider specified in the imprint.</p>

                        <p><strong>Disclaimer</strong></p>

                        <p><strong>1. Liability for content</strong></p>

                        <p>As a service provider we are responsible according to § 7 Abs. 1 TMG (German law) for own
                        contents on these sides according to the general laws. According to §§ 8 to 10 TMG,
                        however, we as a service provider are not obliged to monitor transmitted or stored
                        external information or to investigate circumstances that indicate illegal activity.
                        Obligations to remove or block the use of information under general law remain
                        unaffected. A liability in this regard, however, is only possible from the date of
                        knowledge of a specific infringement. Upon notification of appropriate violations, we
                        will remove this content immediately.
                        </p>

                        <p><strong>2. Liability for links</strong></p>

                        <p>This website contains links to external websites of third parties on whose contents no
                        influence can be taken. Therefore, no guarantee can be given for these external
                        contents. The respective provider or operator of the pages is always responsible for the
                        contents of the linked pages. The linked pages were checked for possible legal
                        violations at the time of linking. Illegal content was not recognizable at the time of
                        linking. However, a permanent content control of the linked pages is not reasonable
                        without concrete evidence of an infringement. Upon notification of violations, such
                        links will be removed immediately from this website to the infringing site.
                        </p>

                        <p><strong>3. Copyright</strong></p>

                        <p>The content and works created by the service providers, their employees and authorized
                        third parties on these pages are subject to German copyright law. The reproduction,
                        processing, distribution and any kind of exploitation outside the limits of copyright
                        require the prior written consent of the respective author or creator. Downloads and
                        copies of this site are for private, non-commercial use only. As far as the contents on
                        this side were not created by the operator, the copyrights of third parties are
                        considered. In particular contents of third parties are marked as such. If you should
                        still be aware of a copyright infringement, we ask for a note. Upon notification of
                        violations, such content will be removed immediately.
                        </p>
                    </Container>
                </div>
            </Layout>
        );
    }
}

export default ScreenLegal;