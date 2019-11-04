import React from "react";
import { Button } from 'antd';

class AntOfMenu extends React.Component {

    render() {
        return (
            <div>
                <Button type="primary">onclick</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <Button type="link">Link</Button>
            </div>
        );
    }
}

export default AntOfMenu;