import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }
    const disactivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status);

    }
    const onPostChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <>
            {editMode
                ? <input onBlur={disactivateEditMode} autoFocus={true} type="text"
                    value={status} onChange={onPostChange} />
                : <span onDoubleClick={activateEditMode}> {status || '-- click twice here and set your status --'}</span>
            }
        </>
    )

}

export default ProfileStatusWithHooks;