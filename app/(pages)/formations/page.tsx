import styles from './styles.module.css';

export default async function PublicFormations() {
    const apiUrl = process.env.API_URL;

    if (!apiUrl) {
        throw new Error("La variable d'url de l'api API_URL n'est pas définie");
    }
    const res = await fetch(`${apiUrl}/formations-type`);
    const types = await res.json();

    return(
        <div id={styles.formations}>
            <div id={styles['formations-content']}>
                {types.data.map((type: { name: string; formations: any[] }) => (
                    <div className={styles['informations-text']} key={type.name} className={styles.typeSection}>
                        <h2 className={styles['informations-title']}>{type.name}</h2>
                        {type.formations.map((formation: {
                            id: string;
                            name: string;
                            year: number;
                            content: string
                        }) => (
                            <div key={formation.id} className={styles['formation-content-box']}>
                                {formation.year !== 0 && <p className={styles['formation-year']}>Année : {formation.year}</p>}
                                <p className={styles['formation-name']}>{formation.name}</p>
                                <p>{formation.content}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

                {/*  <div id={styles['formations-content']}>
                {types.data.map((type: { name: string; formations: any[] })) =>(
                    <p className={styles['informations-title']}>
                        {type.name} En réalité c'est le Type qui doit apparaître
                    </p>
            )}

            {formations.map((formation: { _id: string; name: string }) => (
                    <div className={styles['informations-text']} key={formation.id}>

                        <div className={styles['formation-content-box']}>
                            {formation.year !== 0 && (
                                <p className={styles['formation-year']}>
                                    {formation.year}
                                </p>
                            )}
                            <p className={styles['formation-name']}>
                                {formation.name}
                            </p>
                            <p>{formation.content}</p>
                        </div>
                    </div>

                ))}
            </div>*/}
            </div>
            )
            }
