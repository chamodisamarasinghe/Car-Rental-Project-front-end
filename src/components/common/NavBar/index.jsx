import React,{Component} from "react";
import PropTypes, {string} from "prop-types";
import Tab from "@mui/material/Tab";



class NavBar extends Component{
    static propTypes = {
        children: PropTypes.node,
        classes: PropTypes.object,
        disabled: PropTypes.bool,
        disableFocusRipple: PropTypes.bool,
        disableRipple: PropTypes.bool,
        icon: PropTypes.element | string,
        iconPosition: PropTypes.element | string,
        label: PropTypes.node,
        // sx: PropTypes.func | object | bool,
        value: PropTypes.any,
        wrapped: PropTypes.bool,

    }

    static defaultProps = {
        disabled: false,
        disableFocusRipple: false,
        disableRipple: false,
        iconPosition: 'top',
        wrapped: false
    }

    handleButtonClick = (event) => {
        const {onClick, disabled} = this.props;

        if(disabled) return;

        onClick && onClick({event});
    }

    renderChildren = (label, children) => {
        if (label) return label;
        if (children) return children;
    }

    render() {
        const {
            children,
            classes,
            disabled,
            disableFocusRipple,
            disableRipple,
            icon,
            iconPosition,
            label,

            value,
            wrapped
        } = this.props;

        return (
            <Tab
                // name="navbar"
                // open={open}
                children={children}
                classes={classes}
                disabled={disabled}
                disableFocusRipple={disableFocusRipple}
                disableRipple={disableRipple}
                icon={icon}
                iconPosition={iconPosition}
                label={label}
                value={value}
                wrapped={wrapped}
                onClick={this.handleButtonClick}
            >
                {this.renderChildren(label, children)}
            </Tab>
        )
    }

}

export default NavBar;