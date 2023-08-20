import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose';

/**
 * Entity Repository
 *
 * @class EntityRepository
 */
export abstract class EntityRepository<T extends Document> {
  protected readonly entityModel: Model<T>;

  /**
   * Bootstrap Entity Repository
   *
   * @param {Model} entityModel
   * @returns {void}
   * @memberof EntityRepository
   */
  constructor(entityModel: Model<T>) {
    this.entityModel = entityModel;
  }

  /**
   * Find One
   *
   * @param {FilterQuery} entityFilterQuery
   * @param {Record<string, unknown>} projection
   * @returns {Promise}
   * @memberof EntityRepository
   */
  async findOne(
    entityFilterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T | null> {
    return this.entityModel.findOne(entityFilterQuery, projection).exec();
  }

  /**
   * Find All
   *
   * @param {FilterQuery} entityFilterQuery
   * @returns {Promise}
   * @memberof EntityRepository
   */
  async findAll(entityFilterQuery?: FilterQuery<T>): Promise<T[]> {
    if (entityFilterQuery === undefined) {
      return this.entityModel.find().exec();
    }

    return this.entityModel.find(entityFilterQuery).exec();
  }

  /**
   * Create
   *
   * @param {unknown} createEntityData
   * @returns {Promise}
   * @memberof EntityRepository
   */
  async create(createEntityData: unknown): Promise<T> {
    return await this.entityModel.create(createEntityData);
  }

  /**
   * Update
   *
   * @param {FilterQuery} entityFilterQuery
   * @param {UpdateQuery<unknown>} updateEntityData
   * @returns {Promise}
   * @memberof EntityRepository
   */
  async update(
    entityFilterQuery: FilterQuery<T>,
    updateEntityData: UpdateQuery<unknown>,
  ): Promise<T | null> {
    return this.entityModel.findOneAndUpdate(
      entityFilterQuery,
      updateEntityData,
      {
        new: true,
      },
    );
  }

  /**
   * Delete
   *
   * @param {FilterQuery} entityFilterQuery
   * @returns {Promise<boolean>}
   * @memberof EntityRepository
   */
  async delete(entityFilterQuery: FilterQuery<T>): Promise<boolean> {
    const deleteResult = await this.entityModel.deleteMany(entityFilterQuery);
    return deleteResult.deletedCount >= 1;
  }
}
