import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

export default function Combo() {
    return (
        <div>
            <h4 id="demo">Mention your scheme below</h4>
            <Combobox aria-labelledby="demo">
                <ComboboxInput />
                <ComboboxPopover>
                    <ComboboxList>
                        <ComboboxOption value="Saving Scheme" />
                        <ComboboxOption value="ABC Plan" />
                        <ComboboxOption value="IRDC Plan" />
                        <ComboboxOption value="XYZ Plan" />
                        <ComboboxOption value="Gold Plan" />
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    );
}