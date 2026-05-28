import React from 'react';
import { Container, Box } from "@mui/material";
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';

class ScreenPolicy extends React.Component {
    render() {
        return (
            <Layout>
                <Head>
                    <title>Privacy Policy</title>
                    <meta charSet="utf-8" />
                    <meta property="title" content="Datenschutzerklärung / Privacy Policy" key="title" />
                </Head>
                <div className="bodycontent">
                    <Container>      
                        <Box textAlign="center">                  
                            <h1 className="article-h1" id="top">Datenschutzerklärung</h1>
                            <span>
                                <Link href="/privacyPolicy#eng">Privacy Policy (English see below)</Link>
                            </span>
                            <hr className="article-hr" />
                        </Box>
                    
                        <b><p>1) Information über die Erhebung personenbezogener Daten und Kontaktdaten des
                        Verantwortlichen
                        </p></b>

                        <p>1.1) Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns für Ihr Interesse. Im
                        Folgenden informieren wir Sie über den Umgang mit Ihren personenbezogenen Daten bei Nutzung
                        unserer Website. Personenbezogene Daten sind hierbei alle Daten, mit denen Sie persönlich
                        identifiziert werden können.
                        </p>

                        <p>1.2) Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der
                        Datenschutz-Grundverordnung (DSGVO) ist die Katja Glass Consulting.
                        Inhaberin Katja Glaß, Biesdorfer Weg 17a, 12683 Berlin, Deutschland, Tel.: +49 30 403633 93,
                        E-Mail: info@glacon.eu. Der für die Verarbeitung von personenbezogenen Daten
                        Verantwortliche ist diejenige natürliche oder juristische Person, die allein oder gemeinsam
                        mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
                        entscheidet.
                        </p>

                        <p>
                            1.3) Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                            personenbezogene Daten und anderer vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an
                            den Verantwortlichen) eine SSL-bzw. TLS-Verschlüsselung. Sie können eine verschlüsselte
                            Verbindung an der Zeichenfolge „https://“ und dem Schloss-Symbol in Ihrer Browserzeile
                            erkennen.
                        </p>
                        <b><p>2) Datenerfassung beim Besuch unserer Website</p></b>

                        <p>Bei der bloß informatorischen Nutzung unserer Website, also wenn Sie sich nicht registrieren
                        oder uns anderweitig Informationen übermitteln, erheben wir nur solche Daten, die Ihr
                        Browser an unseren Server übermittelt (sog. „Server-Logfiles“).</p>

                        <ul>
                            <li>Unsere besuchte Website</li>

                            <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>

                            <li>Menge der gesendeten Daten in Byte</li>

                            <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>

                            <li>Verwendeter Browser</li>

                            <li>Verwendetes Betriebssystem</li>

                            <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
                        </ul>


                        <br />
                        <p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten
                        Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website. Eine
                        Weitergabe oder anderweitige Verwendung der Daten findet nicht statt. Wir behalten uns
                        allerdings vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete
                        Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
                        </p>

                        <b><p>3) Kontaktaufnahme</p></b>

                        <p>Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden
                        personenbezogene Daten erhoben. Welche Daten im Falle eines Kontaktformulars erhoben werden,
                        ist aus dem jeweiligen Kontaktformular ersichtlich. Diese Daten werden ausschließlich zum
                        Zweck der Beantwortung Ihres Anliegens bzw. für die Kontaktaufnahme und die damit verbundene
                        technische Administration gespeichert und verwendet. Rechtsgrundlage für die Verarbeitung
                        der Daten ist unser berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß Art. 6
                        Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf den Abschluss eines Vertrages ab, so ist
                        zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten
                        werden nach abschließender Bearbeitung Ihrer Anfrage gelöscht. Dies ist der Fall, wenn sich
                        aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist
                        und sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                        
                        </p>
                        <b><p>4) Rechte des Betroffenen</p></b>

                        <p>4.1) Das geltende Datenschutzrecht gewährt Ihnen gegenüber dem Verantwortlichen hinsichtlich
                        der Verarbeitung Ihrer personenbezogenen Daten umfassende Betroffenenrechte (Auskunfts- und
                        Interventionsrechte), über die wir Sie nachstehend informieren:
                        </p>

                        <p>Auskunftsrecht gemäß Art. 15 DSGVO: Sie haben insbesondere ein Recht auf Auskunft über Ihre
                        von uns verarbeiteten personenbezogenen Daten, die Verarbeitungszwecke, die Kategorien der
                        verarbeiteten personenbezogenen Daten, die Empfänger oder Kategorien von Empfängern,
                        gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer bzw.
                        die Kriterien für die Festlegung der Speicherdauer, das Bestehen eines Rechts auf
                        Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung,
                        Beschwerde bei einer Aufsichtsbehörde, die Herkunft Ihrer Daten, wenn diese nicht durch uns
                        bei Ihnen erhoben wurden, das Bestehen einer automatisierten Entscheidungsfindung
                        einschließlich Profiling und ggf. aussagekräftige Informationen über die involvierte Logik
                        und die Sie betreffende Tragweite und die angestrebten Auswirkungen einer solchen
                        Verarbeitung, sowie Ihr Recht auf Unterrichtung, welche Garantien gemäß Art. 46 DSGVO bei
                        Weiterleitung Ihrer Daten in Drittländer bestehen;
                        </p>

                        <p>Recht auf Berichtigung gemäß Art. 16 DSGVO: Sie haben ein Recht auf unverzügliche
                        Berichtigung Sie betreffender unrichtiger Daten und/oder Vervollständigung Ihrer bei uns
                        gespeicherten unvollständigen Daten;
                        </p>

                        <p>Recht auf Löschung gemäß Art. 17 DSGVO: Sie haben das Recht, die Löschung Ihrer
                        personenbezogenen Daten bei Vorliegen der Voraussetzungen des Art. 17 Abs. 1 DSGVO zu
                        verlangen. Dieses Recht besteht jedoch insbesondere dann nicht, wenn die Verarbeitung zur
                        Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer
                        rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung,
                        Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist;
                        </p>

                        <p>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO: Sie haben das Recht, die
                        Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, solange die von
                        Ihnen bestrittene Richtigkeit Ihrer Daten überprüft wird, wenn Sie eine Löschung Ihrer Daten
                        wegen unzulässiger Datenverarbeitung ablehnen und stattdessen die Einschränkung der
                        Verarbeitung Ihrer Daten verlangen, wenn Sie Ihre Daten zur Geltendmachung, Ausübung oder
                        Verteidigung von Rechtsansprüchen benötigen, nachdem wir diese Daten nach Zweckerreichung
                        nicht mehr benötigen oder wenn Sie Widerspruch aus Gründen Ihrer besonderen Situation
                        eingelegt haben, solange noch nicht feststeht, ob unsere berechtigten Gründe überwiegen;
                        </p>

                        <p>Recht auf Unterrichtung gemäß Art. 19 DSGVO: Haben Sie das Recht auf Berichtigung, Löschung
                        oder Einschränkung der Verarbeitung gegenüber dem Verantwortlichen geltend gemacht, ist
                        dieser verpflichtet, allen Empfängern, denen die Sie betreffenden personenbezogenen Daten
                        offengelegt wurden, diese Berichtigung oder Löschung der Daten oder Einschränkung der
                        Verarbeitung mitzuteilen, es sei denn, dies erweist sich als unmöglich oder ist mit einem
                        unverhältnismäßigen Aufwand verbunden. Ihnen steht das Recht zu, über diese Empfänger
                        unterrichtet zu werden.
                        </p>

                        <p>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO: Sie haben das Recht, Ihre
                        personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen
                        und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen anderen
                        Verantwortlichen zu verlangen, soweit dies technisch machbar ist;
                        </p>

                        <p>Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO: Sie haben das Recht,
                        eine einmal erteilte Einwilligung in die Verarbeitung von Daten jederzeit mit Wirkung für
                        die Zukunft zu widerrufen. Im Falle des Widerrufs werden wir die betroffenen Daten
                        unverzüglich löschen, sofern eine weitere Verarbeitung nicht auf eine Rechtsgrundlage zur
                        einwilligungslosen Verarbeitung gestützt werden kann. Durch den Widerruf der Einwilligung
                        wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten
                        Verarbeitung nicht berührt;
                        </p>

                        <p>Recht auf Beschwerde gemäß Art. 77 DSGVO: Wenn Sie der Ansicht sind, dass die Verarbeitung
                        der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt, haben Sie –
                        unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs –
                        das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres
                        Aufenthaltsortes, Ihres Arbeitsplatzes oder des Ortes des mutmaßlichen Verstoßes.
                        </p>

                        <p>4.2) Widerspruchsrecht
                        </p>

                        <p>Wenn wir im Rahmen einer Interessenabwägung ihre personenbezogenen Daten aufgrund unseres
                        überwiegenden berechtigten Interesses verarbeiten, haben sie das jederzeitige Recht, aus
                        Gründen, die sich aus ihrer besonderen Situation ergeben, gegen diese Verarbeitung
                        Widerspruch mit Wirkung für die Zukunft einzulegen.
                        </p>

                        <p>Machen Sie von ihrem Widerspruchsrecht gebrauch, beenden wir die Verarbeitung der betroffenen
                        Daten. eine Weiterverarbeitung bleibt aber vorbehalten, wenn wir zwingende schutzwürdige
                        Gründe für die Verarbeitung nachweisen können, die ihre Interessen, Grundrechte und
                        Grundfreiheiten überwiegen, oder wenn die Verarbeitung der Geltendmachung, Ausübung oder
                        Verteidigung von Rechtsansprüchen dient.
                        </p>

                        <p>Werden ihre personenbezogenen Daten von uns verarbeitet, um Direktwerbung zu betreiben, haben
                        sie das Recht, jederzeit Widerspruch gegen die Verarbeitung sie betreffender
                        personenbezogener Daten zum Zwecke derartiger Werbung einzulegen. Sie können den Widerspruch
                        wie oben beschrieben ausüben.
                        </p>

                        <p>Machen sie von ihrem Widerspruchsrecht Gebrauch, beenden wir die Verarbeitung der betroffenen
                        Daten zu Direktwerbezwecken.
                        </p>
                        <b><p>5) Dauer der Speicherung personenbezogener Daten</p></b>

                        <p>Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der jeweiligen
                        gesetzlichen Aufbewahrungsfrist (z.B. handels- und steuerrechtliche Aufbewahrungsfristen).
                        Nach Ablauf der Frist werden die entsprechenden Daten gelöscht, sofern sie nicht mehr zur
                        Vertragserfüllung oder Vertragsanbahnung erforderlich sind und/oder unsererseits kein
                        berechtigtes Interesse an der Weiterspeicherung fortbesteht.
                        </p>

                        <b><p>6) YouTube</p></b>
                        <p>
                            Unsere Seite verwendet für die Einbindung von Videos den Anbieter YouTube LLC , 901 Cherry Avenue, San Bruno, CA 94066, USA,
                            vertreten durch Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Normalerweise wird bereits bei Aufruf
                            einer Seite mit eingebetteten Videos Ihre IP-Adresse an YouTube gesendet und Cookies auf Ihrem Rechner installiert. Wir haben
                            unsere YouTube-Videos jedoch mit dem erweiterten Datenschutzmodus eingebunden (in diesem Fall nimmt YouTube immer noch Kontakt
                            zu dem Dienst Double Klick von Google auf, doch werden dabei laut der Datenschutzerklärung von Google personenbezogene Daten nicht
                            ausgewertet). Dadurch werden von YouTube keine Informationen über die Besucher mehr gespeichert, es sei denn, sie sehen sich das
                            Video an. Wenn Sie das Video anklicken, wird Ihre IP-Adresse an YouTube übermittelt und YouTube erfährt, dass Sie das Video angesehen
                            haben. Sind Sie bei YouTube eingeloggt, wird diese Information auch Ihrem Benutzerkonto zugeordnet (dies können Sie verhindern,
                            indem Sie sich vor dem Aufrufen des Videos bei YouTube ausloggen).
                        </p>
                        <p>
                            Von der dann möglichen Erhebung und Verwendung Ihrer Daten durch YouTube haben wir keine Kenntnis und darauf auch keinen Einfluss.
                            Nähere Informationen können Sie der Datenschutzerklärung von YouTube  unter www.google.de/intl/de/policies/privacy/ entnehmen.
                            Zudem verweisen wir für den generellen Umgang mit und die Deaktivierung von Cookies auf unsere allgemeine Darstellung in dieser
                            Datenschutzerklärung.
                        </p>
                    
                        <hr></hr>

                        <h1 className="article-h1" id="eng">Legal Notification (English Translation)</h1>
                    
                        <b><p>1) Information about the collection of personal data and data of the contact person</p>
                        </b>

                        <p>1.1) We are pleased that you can visit our website and use it for your interactions. Below we
                        inform you about the handling of your personal data when using our website. Personal data is
                        all data that allows you to be personally identified.
                        </p>

                        <p>1.2) Responsible for the data processing on this website is the Katja Glass Consulting in in
                        terms of the DSGVO (German GDPR). Owner Katja Glaß, Biesdorfer Weg 17a, 12683 Berlin,
                        Germany, Tel.: +49 30 403633 93, E-Mail: info@glacon.eu. The responsible person for the
                        processing of personal data is that of the natural or legal person who decides, collectively
                        or indirectly, about the processing of personal data.
                        </p>

                        <p>1.3) This website uses for security and protection of personal data (e.g. orders or requests
                        to the person in charge) an SSL / TLS encryption. You can recognize an encrypted connection
                        to the string "https: //" and the lock icon in your browser line.
                        </p>

                        <b><p>2) Data collection when visiting our website</p></b>

                        <p>In the case of merely informative use of our website, in example if you do not register or
                        otherwise provide us with information, we only collect data that your browser transmits to
                        our server (so-called "server log files").</p>

                        <ul>
                            <li>Our visited website</li>
                            <li>Date and time at the time of access</li>
                            <li>Amount of data sent in bytes</li>
                            <li>Source / reference from which you came to the page</li>
                            <li>Used browser</li>
                            <li>Operating system used</li>
                            <li>Used IP address (possibly in anonymous form)</li>
                        </ul>
                        <br />

                        <p>The processing is carried out in accordance with article 6 paragraph 1 from DSGVO (German
                        GDPR) based on our legitimate interest in improving the stability and functionality of our
                        website. A transfer or other use of the data does not take place. However, we reserve the
                        right to retrospectively check the server log files should concrete evidence point to
                        unlawful use.</p>

                        <b><p>3) contact</p></b>

                        <p>When contacting us (for example via contact form or e-mail), personal data is collected.
                        Which data is collected in the case of a contact form can be seen from the respective
                        contact form. This data is stored and used solely for the purpose of answering your request
                        or for establishing contact and the associated technical administration. The legal basis for
                        processing the data is our legitimate interest in answering your request in accordance with
                        article 6 paragraph 1 according DSGVO (German GDPR). If your contact is aimed at concluding
                        a contract, then additional the legal basis applies according DSGVO (German GDPR). Your data
                        will be deleted after final processing of your request. This is the case if it can be
                        inferred from the circumstances that the matter in question has been finally clarified and
                        provided that no statutory storage requirements are in conflict.
                        {/* <!-- If you tick the checkbox in
                                    the contact form, we will also save your data in order to send you information about our
                                    products by e-mail (direct mail). --> */}
                        </p>

                        <b><p>4) Rights of affected persons</p></b>

                        <p>4.1) The applicable data protection law grants you comprehensive data protection rights
                        (information and intervention rights) with regard to the processing of your personal data,
                        which we inform you about below:
                        </p>

                        <p>Right of information according article 15 DSGVO (German GDPR): In particular, you have the
                        right to obtain information about the personal data processed by us, the processing
                        purposes, the categories of processed personal data, the recipients or categories of
                        recipients to whom your data was or are being disclosed, the planned period of storage or
                        the criteria for determining the duration of storage, the right of rectification, deletion,
                        limitation of processing, objection to processing, complaint to a supervisory authority, the
                        origin of your data, if they were not collected by us, the existence of automated
                        decision-making including profiling and possibly meaningful information on the logic
                        involved and the scope and intended impact of such processing, as well as your right to be
                        informed of what guarantees under article 46 DSGVO (German GDPR) for redirection of data in
                        third countries;
                        </p>

                        <p>Right for correction according article 16 DSGVO (German GDPR): You have the right to
                        immediate correction of incorrect data concerning you and / or completion of your incomplete
                        data stored by us;
                        </p>

                        <p>Right to deletion according article 17 DSGVO (German GDPR): You have the right to demand the
                        deletion of your personal data if the requirements of article 17 (1) DSGVO (German GDPR) are
                        met. However, that right does not apply, in particular, where the processing is necessary
                        for the exercise of the right to freedom of expression and information, for the fulfillment
                        of a legal obligation, for reasons of public interest or for the establishment, exercise or
                        defense of legal claims;
                        </p>


                        <p>Right for restriction of processing according article 18 DSGVO (German GDPR): You have the
                        right to demand the restriction of the processing of your personal data as long as the
                        correctness of your data is checked, if you refuse to delete your data due to inadmissible
                        data processing and instead restricting the processing of your data require, if you need
                        your data for the assertion, exercise or defense of legal rights, after we no longer need
                        these data after purpose or if you have objected for reasons of your particular situation,
                        as long as it is not certain, whether our entitled reasons predominate;
                        </p>

                        <p>Right to information in accordance with article 19 DSGVO (German GDPR): If you used the right
                        to rectify, delete or limit the processing to the person responsible, he / she is obliged to
                        notify all other all recipients who have been disclosed personal data to rectify, delete or
                        limit the processing, unless this proves to be impossible or involves a disproportionate
                        effort. You have the right to be informed about these recipients.
                        </p>

                        <p>Right to data portability according article 20 DSGVO (German GDPR): You have the right to
                        receive your personal data provided to us in a structured, common and machine-readable
                        format or to request transmission to another person responsible, insofar as this is
                        technically feasible;
                        </p>

                        <p>Right to revoke granted consent according article 7 paragraph 3 DSGVO (German GDPR): You have
                        the right to revoke consent once given in the processing of data at any time with effect for
                        the future. In the case of withdrawal, we will delete the data concerned immediately, as far
                        as further processing cannot be based on a legal basis for consentless processing. The
                        revocation of consent does not affect the lawfulness of the processing carried out on the
                        basis of the consent until the revocation;
                        </p>

                        <p>Right to complain according article 77 DSGVO (German GDPR): If you consider that the
                        processing of your personal data violates the DSGVO, you have the right to complain to a
                        supervisory authority, in particular in the case of an administrative or judicial remedy
                        Member State of your whereabouts, place of work or place of alleged infringement.
                        </p>


                        <p>4.2) Right of objection
                        </p>

                        <p>If, in the context of a balance of interests, we process your personal data on the basis of
                        our overriding legitimate interest, they have the right at any time, for reasons arising
                        from their particular situation, to file an objection against this processing with effect
                        for the future.
                        </p>

                        <p>If you make use of your right of objection, we will stop the processing of the data
                        concerned. However, further processing is reserved if we can demonstrate compelling
                        legitimate grounds for processing that outweigh their interests, fundamental rights and
                        fundamental freedoms, or if the processing serves to assert, exercise or defend legal
                        claims.
                        </p>

                        <p>If your personal data is processed by us in order to operate direct mail, you have the right
                        to object at any time to the processing of personal data concerning you for the purpose of
                        such advertising. You can exercise the contradiction as described above.
                        </p>

                        <p>If you use your right of objection, we will stop processing the data concerned for direct
                        marketing purposes.
                        </p>

                        <b><p>5) Duration of storage of personal data</p></b>

                        <p>The duration of the storage of personal data is based on the respective legal retention
                        period (eg commercial and tax retention periods). After the deadline, the corresponding data
                        will be deleted, if they are no longer required to fulfill the contract or to initiate a
                        contract and / or on our part no legitimate interest in the re-storage persists.
                        </p>

                        <b><p>6) YouTube</p></b>
                        <p>
                            Our site uses YouTube LLC, 901 Cherry Avenue, San Bruno, CA 94066, USA, for video inclusion.
                            represented by Google Inc., 1600 Amphitheater Parkway, Mountain View, CA 94043, USA. Usually your IP address is sent to YouTube and
                            cookies are installed on your machine when a YouTube video is embedded. We have
                            however, our YouTube videos are included with the enhanced privacy mode (in which case, YouTube is still in contact
                            to Google's Double Click service, but Google's privacy policy does not allow personal information
                            evaluated). This will prevent YouTube from storing any information about visitors unless they see it
                            Video on. If you click on the video, your IP address will be sent to YouTube and YouTube will know that you are watching the video.
                            If you are logged into YouTube, this information will also be assigned to your user account (you can prevent this by logging off from
                            YouTube before watching this video).
                        </p>
                        <p>
                            We have no knowledge or influence about any collection and use of your data by YouTube.
                            For more information, see the YouTube privacy policy at www.google.com/intl/en/policies/privacy/.
                            In addition, we refer to the general handling and deactivation of cookies on our general presentation in this
                            Data protection.
                        </p>
                    </Container>
                </div>
            </Layout>
        );
    }
}

export default ScreenPolicy;