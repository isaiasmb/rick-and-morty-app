/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryCharacters
// ====================================================

export interface QueryCharacters_characters_info {
  __typename: "Info";
  /**
   * The length of the response.
   */
  count: number | null;
  /**
   * The amount of pages.
   */
  pages: number | null;
  /**
   * Number of the previous page (if it exists)
   */
  prev: number | null;
  /**
   * Number of the next page (if it exists)
   */
  next: number | null;
}

export interface QueryCharacters_characters_results_episode {
  __typename: "Episode";
  /**
   * The id of the episode.
   */
  id: string | null;
  /**
   * The name of the episode.
   */
  name: string | null;
}

export interface QueryCharacters_characters_results_origin_residents {
  __typename: "Character";
  /**
   * The id of the character.
   */
  id: string | null;
}

export interface QueryCharacters_characters_results_origin {
  __typename: "Location";
  /**
   * The name of the location.
   */
  name: string | null;
  /**
   * The dimension in which the location is located.
   */
  dimension: string | null;
  /**
   * List of characters who have been last seen in the location.
   */
  residents: (QueryCharacters_characters_results_origin_residents | null)[];
}

export interface QueryCharacters_characters_results_location_residents {
  __typename: "Character";
  /**
   * The id of the character.
   */
  id: string | null;
}

export interface QueryCharacters_characters_results_location {
  __typename: "Location";
  /**
   * The name of the location.
   */
  name: string | null;
  /**
   * The dimension in which the location is located.
   */
  dimension: string | null;
  /**
   * List of characters who have been last seen in the location.
   */
  residents: (QueryCharacters_characters_results_location_residents | null)[];
}

export interface QueryCharacters_characters_results {
  __typename: "Character";
  /**
   * The id of the character.
   */
  id: string | null;
  /**
   * The name of the character.
   */
  name: string | null;
  /**
   * The status of the character ('Alive', 'Dead' or 'unknown').
   */
  status: string | null;
  /**
   * The species of the character.
   */
  species: string | null;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: string | null;
  /**
   * The type or subspecies of the character.
   */
  type: string | null;
  /**
   * Episodes in which this character appeared.
   */
  episode: (QueryCharacters_characters_results_episode | null)[];
  /**
   * The character's origin location
   */
  origin: QueryCharacters_characters_results_origin | null;
  /**
   * The character's last known location
   */
  location: QueryCharacters_characters_results_location | null;
}

export interface QueryCharacters_characters {
  __typename: "Characters";
  info: QueryCharacters_characters_info | null;
  results: (QueryCharacters_characters_results | null)[] | null;
}

export interface QueryCharacters {
  /**
   * Get the list of all characters
   */
  characters: QueryCharacters_characters | null;
}

export interface QueryCharactersVariables {
  page: number;
}
