import Tooltip from "@reach/tooltip";
import "@reach/tooltip/styles.css";

export default function SampleTooltip() {
    return (
        <div style={{marginTop:'22px'}}>
            <Tooltip label="Profile">
                <button style={{ fontSize: 25 }}>
                    <span>🔔</span>
                </button>
            </Tooltip>
            <Tooltip label="Settings">
                <button style={{ fontSize: 25 }}>
                    <span aria-hidden>⚙️</span>
                </button>
            </Tooltip>
            
                <Tooltip label="Notifications" aria-label="3 Notifications">
                    <button style={{ fontSize: 25 }}>
                        <span>📝</span>
                        <span>3</span>
                    </button>
                </Tooltip>       
        </div>
    );
}