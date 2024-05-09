import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Theme from "../theme.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Theme">
                <Theme/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews