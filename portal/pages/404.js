import Layout from '../components/Layout'

export default function Custom404() {
    return (
        <Layout>
            <div className="bodycontent">
                <div className="ui vertical segment">
                    <div className="ui centered container stackable grid">
                        <div className="row">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p className="error404">404</p>
                                        </td>
                                        <td>
                                            <h2 className="size32">
                                                Ooops!
                                        </h2>
                                            <p className="size18">
                                                That page does not exist or is unavailable!
                                        </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}