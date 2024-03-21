import * as SQLite from "expo-sqlite";

// Types
import type { Session } from "../types";

type Result = {
    rows: {
        _array: Session[];
    };
};

const db = SQLite.openDatabase("sessions.db");

export const init = (): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)",
                [],
                () => resolve(),
                (tx, error) => {
                    reject(error);
                    return false
                }
            );
        });
    });
};

export const insertSession = ({ email, localId, token }: Session): Promise<Result> => {
    return new Promise<Result>((accept, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO sessions (email, localId, token) VALUES (?, ?, ?);",
                [email, localId, token],
                (_, result) => accept(result),
                (_, error) => {
                    reject(error)
                    return false
                }
            );
        });
    });
};

export const fetchSession = (): Promise<Session | undefined> => {
    return new Promise<Session | undefined>((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM sessions",
                [],
                (_, result) => {
                    const user = result?.rows._array[0];
                    console.log("fetchSession");
                    console.log(user);
                    resolve(user);
                },
                (_, error) => {
                    reject(error)
                    return false
                }
            );
        });
    });
};

export const deleteSession = ({ localId }: { localId: string }): Promise<Result> => {
    return new Promise<Result>((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "DELETE FROM sessions WHERE localId = ?",
                [localId],
                (_, result) => resolve(result),
                (_, error) => {
                    reject(error)
                    return false
                }
            );
        });
    });
};
