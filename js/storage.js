const KEY='dailyTargetPreferences';export const prefs=()=>JSON.parse(localStorage.getItem(KEY)||'{}');export function savePrefs(p){localStorage.setItem(KEY,JSON.stringify({...prefs(),...p}))}
